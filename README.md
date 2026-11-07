# Mezzaluna.Tech landing page

Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Jalankan
```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Yang sering diubah
- Nomor WhatsApp: `NEXT_PUBLIC_WA_NUMBER` (lihat `.env.example`, salin ke `.env.local`)
- Warna: blok `@theme` di `src/app/globals.css` (oranye utama `--color-brand: #d97757`)
- Teks tiap bagian: `src/components/*.tsx`
- Produk baru: tambah objek di array `products` pada `src/components/Products.tsx`

## Deploy
Push ke GitHub lalu import ke Vercel, tanpa konfigurasi tambahan.
