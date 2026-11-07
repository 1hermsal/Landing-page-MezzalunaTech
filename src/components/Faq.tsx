const faqs = [
  {
    q: "Jasa apa saja yang ada di Mezzaluna.Tech?",
    a: "Kami membuat website, dashboard pembukuan, dan sistem digital untuk UMKM. Rapi, mudah dipakai, dan bisa dibuka dari komputer, tablet, dan ponsel.",
  },
  {
    q: "Apakah saya bisa melihat contohnya dulu?",
    a: "Bisa. Beberapa sistem yang sudah kami buat ada di bagian Portofolio produk dan bisa dicoba langsung lewat demo.",
  },
  {
    q: "Apakah harus memasang aplikasi?",
    a: "Tidak perlu. Sistem dibuka lewat browser di HP, tablet, atau komputer.",
  },
  {
    q: "Bisakah sistemnya disesuaikan dengan cara kerja usaha saya?",
    a: "Bisa. Ceritakan alur kerja usaha Anda lewat WhatsApp, lalu kami kirim gambaran dan penawarannya.",
  },
  {
    q: "Berapa biayanya?",
    a: "Bergantung pada kebutuhan usaha Anda. Hubungi kami dulu untuk mendapat penawaran.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-soft px-5 py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.5fr] md:gap-16">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Pertanyaan yang sering muncul</h2>
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-6 font-semibold">
                {f.q}
                <span className="flex-none text-2xl font-normal leading-none text-brand group-open:hidden" aria-hidden="true">+</span>
                <span className="hidden flex-none text-2xl font-normal leading-none text-brand group-open:inline" aria-hidden="true">&minus;</span>
              </summary>
              <p className="mt-3 max-w-xl leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}