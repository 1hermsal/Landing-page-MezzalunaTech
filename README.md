# Mezzaluna.Tech landing page

Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Jalankan lokal
```bash
npm install
cp .env.example .env.local     # isi ADMIN_PASSWORD (min. 8 karakter)
npm run dev                    # http://localhost:3000
```
Admin: http://localhost:3000/admin

## Halaman admin (/admin)
Tambah dan hapus produk portofolio (nama, kategori, deskripsi, fitur, link demo, gambar).
Produk baru langsung tampil di bagian "Portofolio produk".

- Lokal: data disimpan di `data/products.json`, gambar di `public/uploads`. Tanpa setup tambahan.
- Produksi (Vercel): filesystem Vercel read-only, jadi pakai **Vercel Blob**:
  1. Project di Vercel > Storage > Create > Blob, lalu sambungkan ke project (`BLOB_READ_WRITE_TOKEN` terisi otomatis).
  2. Settings > Environment Variables: isi `ADMIN_PASSWORD` dan `SESSION_SECRET` (string acak panjang).
  3. Redeploy.

## Yang sering diubah
- Nomor WhatsApp: `NEXT_PUBLIC_WA_NUMBER`
- Warna: blok `@theme` di `src/app/globals.css` (oranye utama `#d97757`)
- Teks tiap bagian: `src/components/*.tsx`
- Kategori: `src/lib/categories.ts` (muncul di form admin dan kartu "Apa yang bisa kami buat")
- Gambar hero: konstanta di `src/components/Hero.tsx`
