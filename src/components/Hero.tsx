import Image from "next/image";
import { Button } from "./Button";

// Ganti file ini untuk mengubah banner hero.
const BANNER = "/image/banner/baner.png";

export function Hero() {
  return (
    <section id="top" className="overflow-hidden px-5 pb-20 pt-12 md:pb-28 md:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1fr_1.25fr] md:gap-10">
        <div>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
            Solusi Teknologi Untuk Bisnis Yang Lebih Mudah
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Kami membuat website, dashboard pembukuan, dan sistem digital untuk UMKM. Rapi, mudah dipakai, dan bisa
            dibuka dari komputer, tablet, dan ponsel.
          </p>
          <Button href="#produk" className="mt-9">
            Lihat portofolio
          </Button>
        </div>

        <div className="overflow-hidden rounded-tl-[4rem] rounded-br-[4rem] rounded-bl-2xl rounded-tr-2xl bg-ink md:rounded-tl-[7rem] md:rounded-br-[7rem]">
          <Image
            src={BANNER}
            alt="Mezzaluna.Tech: solusi teknologi untuk bisnis yang lebih mudah"
            width={2055}
            height={765}
            priority
            sizes="(min-width: 1152px) 640px, 100vw"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
