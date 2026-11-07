import "server-only";
import { promises as fs } from "fs";
import path from "path";
import { put, list, del } from "@vercel/blob";
import seed from "../../data/products.json";
import type { Product } from "./types";

/**
 * Penyimpanan portofolio.
 * - Produksi (Vercel): data JSON + gambar disimpan di Vercel Blob (butuh BLOB_READ_WRITE_TOKEN).
 * - Lokal: data/products.json + public/uploads (tanpa konfigurasi apa pun).
 */
const TOKEN = process.env.BLOB_READ_WRITE_TOKEN;
const DB_PATH = "data/products.json";
const LOCAL_DB = path.join(process.cwd(), "data", "products.json");
const LOCAL_UPLOADS = path.join(process.cwd(), "public", "uploads");

export const storageReady = Boolean(TOKEN) || !process.env.VERCEL;

export async function readProducts(): Promise<Product[]> {
  let items: Product[] = seed as Product[];
  try {
    if (TOKEN) {
      const { blobs } = await list({ prefix: DB_PATH, limit: 1 });
      if (blobs[0]) {
        const res = await fetch(`${blobs[0].url}?t=${Date.now()}`, { cache: "no-store" });
        if (res.ok) items = (await res.json()) as Product[];
      }
    } else {
      items = JSON.parse(await fs.readFile(LOCAL_DB, "utf8")) as Product[];
    }
  } catch {
    /* pakai seed bila belum ada data */
  }
  return [...items].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function writeProducts(items: Product[]) {
  const json = JSON.stringify(items, null, 2);
  if (TOKEN) {
    await put(DB_PATH, json, {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/json",
      cacheControlMaxAge: 60,
    });
  } else {
    await fs.writeFile(LOCAL_DB, json);
  }
}

export async function saveImage(file: File, id: string): Promise<string> {
  const ext = file.type === "image/png" ? "png" : file.type === "image/webp" ? "webp" : "jpg";
  const name = `${id}-${Date.now()}.${ext}`;
  if (TOKEN) {
    const blob = await put(`portfolio/${name}`, file, { access: "public", addRandomSuffix: false });
    return blob.url;
  }
  await fs.mkdir(LOCAL_UPLOADS, { recursive: true });
  await fs.writeFile(path.join(LOCAL_UPLOADS, name), Buffer.from(await file.arrayBuffer()));
  return `/uploads/${name}`;
}

export async function removeImage(url: string) {
  try {
    if (TOKEN && url.startsWith("http")) await del(url);
    else if (url.startsWith("/uploads/")) await fs.unlink(path.join(LOCAL_UPLOADS, path.basename(url)));
  } catch {
    /* gambar bawaan atau sudah terhapus */
  }
}
