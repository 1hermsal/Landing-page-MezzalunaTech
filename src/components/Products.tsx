import { Button } from "./Button";
import { DeviceMockup } from "./DeviceMockup";
import type { Product } from "@/lib/types";

function ProductCard({ p, className = "" }: { p: Product; className?: string }) {
  return (
    <article id={`p-${p.id}`} className={`flex flex-col ${className}`}>
      <div className="rounded-tl-[3.5rem] rounded-br-[3.5rem] rounded-bl-xl rounded-tr-xl bg-tint p-6 pt-9">
        <DeviceMockup name={p.name} desktop={p.image} tablet={p.tabletImage} />
      </div>
      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex items-center gap-3 text-sm">
          <span className="font-semibold text-brand-text">{p.category}</span>
          <span className="rounded-full bg-tint px-2.5 py-0.5 text-xs font-semibold text-brand-text">{p.status}</span>
        </div>
        <h3 className="mt-2 text-2xl font-bold tracking-tight">{p.name}</h3>
        <p className="mt-2 leading-relaxed text-muted">{p.description}</p>
        {p.features.length > 0 && (
          <ul className="mt-4 space-y-2 text-[15px]">
            {p.features.map((f) => (
              <li key={f} className="flex gap-2.5">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 flex-none text-brand" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
        )}
        {p.note && <p className="mt-4 text-sm text-muted">{p.note}</p>}
        <div className="mt-auto pt-6">
          <Button href={p.demoUrl} target="_blank" rel="noopener noreferrer" variant="dark">
            Lihat demo
          </Button>
        </div>
      </div>
    </article>
  );
}

export function Products({ products }: { products: Product[] }) {
  const cols = products.length >= 3 ? "lg:grid-cols-3" : "";
  return (
    <section id="produk" className="bg-soft px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">Portofolio produk</h2>
        <p className="mx-auto mt-4 max-w-md text-center leading-relaxed text-muted">
          Sistem yang sudah kami buat. Semuanya bisa dicoba langsung lewat demo.
        </p>
        <div className={`-mx-5 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-5 px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 sm:overflow-visible sm:px-0 sm:pb-0 ${cols}`}>
          {products.map((p) => (
            <ProductCard key={p.id} p={p} className="w-[85%] flex-none snap-start sm:w-auto" />
          ))}
        </div>
      </div>
    </section>
  );
}