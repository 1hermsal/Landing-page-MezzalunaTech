import Image from "next/image";
import { Button } from "./Button";

export const navLinks = [
  { href: "#layanan", label: "Layanan" },
  { href: "#produk", label: "Produk" },
  { href: "#cara-kerja", label: "Cara kerja" },
  { href: "#faq", label: "Tanya jawab" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#top" className="flex min-w-0 items-center gap-2" aria-label="Mezzaluna.Tech">
          <Image src="/image/logo/mezzaluna-mark.png" alt="" width={44} height={25} priority />
          <span className="text-base font-bold tracking-tight sm:text-lg">
            Mezzaluna<span className="text-accent">.Tech</span>
          </span>
        </a>
        <nav aria-label="Utama" className="hidden gap-9 text-[15px] font-medium md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-brand-text">
              {l.label}
            </a>
          ))}
        </nav>
        <Button href="#kontak" className="shrink-0 whitespace-nowrap px-4 py-2 text-sm sm:px-5 sm:py-2.5">
          Hubungi kami
        </Button>
      </div>
    </header>
  );
}
