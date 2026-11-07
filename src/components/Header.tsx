import Image from "next/image";
import { Button } from "./Button";

const links = [
  { href: "#layanan", label: "Layanan" },
  { href: "#produk", label: "Produk" },
  { href: "#faq", label: "Tanya jawab" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Mezzaluna.Tech">
          <Image src="/image/logo/mezzaluna-mark.png" alt="" width={44} height={25} priority />
          <span className="text-lg font-bold tracking-tight">
            Mezzaluna<span className="text-brand">.Tech</span>
          </span>
        </a>
        <nav aria-label="Utama" className="hidden gap-8 text-[15px] font-medium text-muted md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>
        <Button href="#kontak" className="px-4 py-2.5 text-sm">
          Hubungi kami
        </Button>
      </div>
    </header>
  );
}
