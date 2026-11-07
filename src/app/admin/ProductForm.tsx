"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { categories } from "@/lib/categories";

// Kecilkan gambar di browser supaya tidak melewati batas upload 4 MB.
async function shrink(file: File, maxWidth = 1800): Promise<File> {
  try {
    const bmp = await createImageBitmap(file);
    const scale = Math.min(1, maxWidth / bmp.width);
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bmp.width * scale);
    canvas.height = Math.round(bmp.height * scale);
    canvas.getContext("2d")!.drawImage(bmp, 0, 0, canvas.width, canvas.height);
    const blob = await new Promise<Blob | null>((r) => canvas.toBlob(r, "image/webp", 0.86));
    if (!blob) return file;
    return new File([blob], file.name.replace(/\.\w+$/, "") + ".webp", { type: "image/webp" });
  } catch {
    return file;
  }
}

const field =
  "mt-1.5 w-full rounded-lg border border-line bg-white px-4 py-3 text-[15px] outline-none focus:border-brand";

export function ProductForm() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    const data = new FormData(e.currentTarget);
    const img = data.get("image");
    if (img instanceof File && img.size > 0) data.set("image", await shrink(img));
    const tab = data.get("tabletImage");
    if (tab instanceof File && tab.size > 0) data.set("tabletImage", await shrink(tab, 1400));
    else data.delete("tabletImage");

    try {
      const res = await fetch("/api/admin/products", { method: "POST", body: data });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "Gagal menyimpan produk.");
      formRef.current?.reset();
      setPreview(null);
      setMsg({ ok: true, text: "Produk tersimpan dan sudah tampil di halaman utama." });
      router.refresh();
    } catch (err) {
      setMsg({ ok: false, text: err instanceof Error ? err.message : "Gagal menyimpan produk." });
    } finally {
      setBusy(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="text-sm font-semibold">Nama produk</label>
        <input id="name" name="name" required maxLength={80} className={field} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="category" className="text-sm font-semibold">Kategori</label>
          <select id="category" name="category" required className={field} defaultValue="">
            <option value="" disabled>Pilih kategori</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="status" className="text-sm font-semibold">Label status</label>
          <input id="status" name="status" maxLength={30} placeholder="Bisa dicoba" className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="description" className="text-sm font-semibold">Deskripsi singkat</label>
        <textarea id="description" name="description" required rows={3} maxLength={400} className={field} />
      </div>

      <div>
        <label htmlFor="features" className="text-sm font-semibold">Fitur utama</label>
        <textarea
          id="features"
          name="features"
          rows={3}
          placeholder={"Satu fitur per baris, maksimal 5\nLaporan harian dan bulanan"}
          className={field}
        />
      </div>

      <div>
        <label htmlFor="demoUrl" className="text-sm font-semibold">Link demo</label>
        <input id="demoUrl" name="demoUrl" type="url" required placeholder="https://" className={field} />
      </div>

      <div>
        <label htmlFor="note" className="text-sm font-semibold">Catatan kecil (opsional)</label>
        <input id="note" name="note" maxLength={160} placeholder="Contoh: harga pada demo hanyalah contoh" className={field} />
      </div>

      <div>
        <label htmlFor="image" className="text-sm font-semibold">Gambar tampilan komputer</label>
        <input
          id="image"
          name="image"
          type="file"
          required
          accept="image/png,image/jpeg,image/webp"
          onChange={(e) => {
            const f = e.target.files?.[0];
            setPreview(f ? URL.createObjectURL(f) : null);
          }}
          className="mt-1.5 block w-full text-sm file:mr-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-soft file:px-4 file:py-2.5 file:font-semibold file:text-ink hover:file:bg-line"
        />
        <p className="mt-1.5 text-sm text-muted">Screenshot layar penuh lebih bagus. Ukuran dikecilkan otomatis.</p>
        {preview && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={preview} alt="Pratinjau gambar" className="mt-3 max-h-48 rounded-lg border border-line" />
        )}
      </div>

      <div>
        <label htmlFor="tabletImage" className="text-sm font-semibold">Gambar tampilan tablet (opsional)</label>
        <input
          id="tabletImage"
          name="tabletImage"
          type="file"
          accept="image/png,image/jpeg,image/webp"
          className="mt-1.5 block w-full text-sm file:mr-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-soft file:px-4 file:py-2.5 file:font-semibold file:text-ink hover:file:bg-line"
        />
        <p className="mt-1.5 text-sm text-muted">Kalau kosong, gambar komputer dipotong untuk layar tablet.</p>
      </div>

      {msg && (
        <p role="status" className={`rounded-lg px-4 py-3 text-sm ${msg.ok ? "bg-soft text-ink" : "bg-red-50 text-red-700"}`}>
          {msg.text}
        </p>
      )}

      <button
        disabled={busy}
        className="rounded-lg bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-hover disabled:opacity-60"
      >
        {busy ? "Menyimpan..." : "Simpan produk"}
      </button>
    </form>
  );
}
