import { categories, type Category } from "@/lib/categories";
import { waLink } from "@/lib/whatsapp";
import type { Product } from "@/lib/types";

const icons: Record<Category["icon"], React.ReactNode> = {
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </>
  ),
  chart: <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" />,
  box: (
    <>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
      <path d="M12 12l8-4.5M12 12L4 7.5M12 12v9" />
    </>
  ),
  pen: <path d="M14.5 6.5l3 3M4 20l1-4L16 5a2.1 2.1 0 013 3L8 19z" />,
};

// Gradasi biru dari tua ke muda, semuanya dari palet yang sama.
const themes = [
  { card: "bg-brand text-white", icon: "bg-white/15", link: "text-white", muted: "text-white/85" },
  { card: "bg-brand-hover text-white", icon: "bg-white/15", link: "text-white", muted: "text-white/85" },
  { card: "bg-[#cfe0f7] text-ink", icon: "bg-white/70", link: "text-brand-text", muted: "text-ink/75" },
  { card: "bg-tint text-ink", icon: "bg-white", link: "text-brand-text", muted: "text-ink/75" },
];

export function Categories({ products }: { products: Product[] }) {
  return (
    <section id="layanan" className="px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">Apa yang bisa kami buat</h2>
        <p className="mx-auto mt-4 max-w-md text-center leading-relaxed text-muted">
          Pilih yang paling dekat dengan kebutuhan usaha Anda.
        </p>

        <div className="-mx-5 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-5 px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
          {categories.map((c, i) => {
            const t = themes[i % themes.length];
            const sample = products.find((p) => p.category === c.id);
            const link = sample
              ? { href: `#p-${sample.id}`, label: "Lihat contoh", external: false }
              : { href: waLink(`Halo Mezzaluna.Tech, saya tertarik dengan ${c.name}`), label: "Tanya kami", external: true };
            return (
              <div
                key={c.id}
                className={`flex min-h-60 w-[72%] flex-none snap-start flex-col rounded-tl-[3rem] rounded-br-[3rem] rounded-bl-xl rounded-tr-xl p-5 sm:min-h-72 sm:w-auto sm:rounded-tl-[4.5rem] sm:rounded-br-[4.5rem] sm:rounded-bl-2xl sm:rounded-tr-2xl sm:p-7 ${t.card}`}
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-full ${t.icon}`}>
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {icons[c.icon]}
                  </svg>
                </span>
                <h3 className="mt-auto pt-6 text-lg font-semibold sm:pt-10 sm:text-xl">{c.name}</h3>
                <p className={`mt-2 text-[15px] leading-relaxed ${t.muted}`}>{c.text}</p>
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`mt-5 text-sm font-semibold underline underline-offset-4 ${t.link}`}
                >
                  {link.label}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}