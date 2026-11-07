import Image from "next/image";
import { Button } from "./Button";
import { waLink } from "@/lib";

export function Hero() {
  return (
    <section id="top" className="px-5 pt-16 md:pt-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
          Sistem digital untuk usaha Anda yang benar-benar terpakai
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Kami membuat website dan sistem khusus UMKM, dari catatan di buku tulis menjadi dashboard
          yang rapi dan bisa dibuka dari HP.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#produk">Lihat produk</Button>
          <Button href={waLink()} target="_blank" rel="noopener noreferrer" variant="outline">
            Chat WhatsApp
          </Button>
        </div>

        <div className="mt-14 overflow-hidden rounded-xl border border-line shadow-sm md:mt-20">
          <Image
            src="/image/product/multi-agen/desktop.png"
            alt="Dashboard Multi Agen: saldo, omset, dan laba dalam satu layar"
            width={1900}
            height={920}
            sizes="(min-width: 1152px) 1152px, 100vw"
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
