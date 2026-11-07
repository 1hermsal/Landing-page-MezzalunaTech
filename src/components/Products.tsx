import Image from "next/image";
import { Button } from "./Button";

type Product = {
  name: string;
  status: string;
  description: string;
  features: string[];
  href: string;
  image: string;
  alt: string;
  note?: string;
};

const products: Product[] = [
  {
    name: "Multi Agen",
    status: "Sudah bisa dicoba",
    description:
      "Buku kas untuk pemilik outlet dengan beberapa agen (BRILink, BNI Agen46, dan lainnya). Semua transaksi dicatat di satu tempat.",
    features: [
      "Saldo tiap agen dan laba total dalam satu layar",
      "Laporan harian dan bulanan",
      "Bisa dibuka dari HP, tablet, atau komputer",
      "Tidak terpaku pada aplikasi bawaan tiap agen",
    ],
    href: "https://demo-multi-agent-cyan.vercel.app/",
    image: "/image/product/multi-agen/desktop.png",
    alt: "Tampilan Multi Agen di komputer",
  },
  {
    name: "Jadoel",
    status: "Demo toko online",
    description:
      "Contoh toko online untuk satu pemilik dengan banyak kategori: perabotan, skincare, dan parfum. Cocok untuk usaha yang ingin berjualan online dengan tampilan rapi.",
    features: [
      "Katalog produk per kategori",
      "Pencarian dan filter produk",
      "Keranjang belanja",
      "Nyaman dibuka dari HP",
    ],
    href: "https://jadoelweb.vercel.app",
    image: "/image/product/jadoel/desktop.png",
    alt: "Tampilan demo toko online Jadoel di komputer",
    note: "Produk dan harga di demo masih contoh.",
  },
];

export function Products() {
  return (
    <section id="produk" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Produk kami</h2>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">
          Sistem siap pakai yang bisa langsung dicoba. Produk lain akan menyusul di halaman ini.
        </p>

        <div className="mt-14 space-y-20 md:space-y-28">
          {products.map((p, i) => (
            <article key={p.name} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <p className="text-sm font-semibold text-brand-text">{p.status}</p>
                <h3 className="mt-2 text-3xl font-bold tracking-tight">{p.name}</h3>
                <p className="mt-4 leading-relaxed text-muted">{p.description}</p>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 flex-none text-brand" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12.5l4.5 4.5L19 7.5" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button href={p.href} target="_blank" rel="noopener noreferrer" variant="dark" className="mt-8">
                  Lihat demo
                </Button>
                {p.note && <p className="mt-3 text-sm text-muted">{p.note}</p>}
              </div>
              <div className="overflow-hidden rounded-xl border border-line shadow-sm">
                <Image
                  src={p.image}
                  alt={p.alt}
                  width={1900}
                  height={920}
                  sizes="(min-width: 768px) 560px, 100vw"
                  className="h-auto w-full"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
          <div className="bg-white p-8">
            <h3 className="text-lg font-semibold">Produk berikutnya</h3>
            <p className="mt-2 text-muted">Sedang disiapkan.</p>
          </div>
          <div className="bg-white p-8">
            <h3 className="text-lg font-semibold">Punya ide sistem sendiri?</h3>
            <p className="mt-2 text-muted">Ceritakan ke kami, siapa tahu jadi produk berikutnya.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
