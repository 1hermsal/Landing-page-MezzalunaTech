import { navLinks } from "./Header";
import { waLink } from "@/lib/whatsapp";
import { TechLogos } from "./TechLogos";

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-14 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-xl font-bold">
            Mezzaluna<span className="text-accent">.Tech</span>
          </p>
          <p className="mt-3 max-w-xs leading-relaxed text-white/70">YOUR DIGITAL SOLUTION PARTNER</p>
        </div>
        <nav aria-label="Footer" className="space-y-3 text-sm">
          <p className="font-semibold">Halaman</p>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="block text-white/70 transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="space-y-3 text-sm">
          <p className="font-semibold">Hubungi kami</p>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="block text-white/70 transition-colors hover:text-white">
            WhatsApp
          </a>
        </div>
      </div>
      <TechLogos/>
      <p className="mx-auto mt-12 max-w-6xl border-t border-white/15 pt-6 text-sm text-white/60">
       &copy; 2026 Mezzaluna.Tech
      </p>
    </footer>
  );
}
