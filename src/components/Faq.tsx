const faqs = [
  {
    q: "Apakah Multi Agen otomatis tersambung ke aplikasi bank?",
    a: "Belum. Transaksi dicatat manual oleh pengguna, lalu saldo dan laporan dihitung otomatis. Fungsinya merekap semua agen di satu tempat.",
  },
  { q: "Perlu install aplikasi?", a: "Tidak. Cukup buka lewat browser di HP, tablet, atau komputer." },
  {
    q: "Bisa dibuatkan sistem untuk usaha di luar agen?",
    a: "Bisa. Ceritakan kebutuhan usaha Anda lewat tombol kontak di bawah, nanti kami berikan gambaran dan penawarannya.",
  },
  {
    q: "Berapa biayanya?",
    a: "Tergantung kebutuhan. Chat kami dulu untuk mendapatkan penawaran yang sesuai.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-soft px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Tanya jawab</h2>
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
