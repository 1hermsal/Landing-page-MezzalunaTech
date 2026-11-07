import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAdmin } from "@/lib/auth";
import { categoryIds } from "@/lib/categories";
import { readProducts, saveImage, storageReady, writeProducts } from "@/lib/store";
import type { Product } from "@/lib/types";

const MAX_IMAGE = 4 * 1024 * 1024;
const TYPES = ["image/jpeg", "image/png", "image/webp"];

const fail = (error: string, status = 400) => NextResponse.json({ error }, { status });
const str = (v: FormDataEntryValue | null, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  if (!(await isAdmin())) return fail("Sesi berakhir. Silakan masuk lagi.", 401);
  if (!storageReady) {
    return fail("Penyimpanan belum disiapkan. Tambahkan Vercel Blob dan variabel BLOB_READ_WRITE_TOKEN.", 500);
  }

  const form = await req.formData();
  const name = str(form.get("name"), 80);
  const category = str(form.get("category"), 60);
  const status = str(form.get("status"), 30) || "Bisa dicoba";
  const description = str(form.get("description"), 400);
  const note = str(form.get("note"), 160);
  const demoUrl = str(form.get("demoUrl"), 300);
  const features = str(form.get("features"), 600)
    .split("\n")
    .map((f) => f.trim())
    .filter(Boolean)
    .slice(0, 5);
  const image = form.get("image");
  const tablet = form.get("tabletImage");
  const hasTablet = tablet instanceof File && tablet.size > 0;

  if (!name) return fail("Nama produk wajib diisi.");
  if (!categoryIds.includes(category)) return fail("Pilih kategori yang tersedia.");
  if (!description) return fail("Deskripsi wajib diisi.");
  if (!/^https?:\/\//i.test(demoUrl)) return fail("Link demo harus diawali http:// atau https://");
  if (!(image instanceof File) || image.size === 0) return fail("Gambar produk wajib diunggah.");
  if (!TYPES.includes(image.type)) return fail("Format gambar harus JPG, PNG, atau WebP.");
  if (image.size > MAX_IMAGE) return fail("Ukuran gambar maksimal 4 MB.");

  if (hasTablet && !TYPES.includes(tablet.type)) return fail("Format gambar tablet harus JPG, PNG, atau WebP.");
  if (hasTablet && tablet.size > MAX_IMAGE) return fail("Ukuran gambar tablet maksimal 4 MB.");

  const id = `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "produk"}-${crypto.randomUUID().slice(0, 6)}`;
  const imageUrl = await saveImage(image, id);
  const tabletUrl = hasTablet ? await saveImage(tablet, `${id}-tablet`) : undefined;

  const product: Product = {
    id,
    name,
    category,
    status,
    description,
    features,
    demoUrl,
    image: imageUrl,
    ...(tabletUrl ? { tabletImage: tabletUrl } : {}),
    ...(note ? { note } : {}),
    createdAt: new Date().toISOString(),
  };

  await writeProducts([product, ...(await readProducts())]);
  revalidatePath("/");
  revalidatePath("/admin");
  return NextResponse.json({ product });
}
