const services = [
  {
    title: "Website dan toko online",
    text: "Halaman usaha yang rapi, cepat dibuka di HP, dan siap dipakai untuk promosi.",
  },
  {
    title: "Dashboard pembukuan",
    text: "Catat pemasukan, pengeluaran, dan laba dalam satu layar, tanpa hitung manual tiap malam.",
  },
  {
    title: "Stok dan order",
    text: "Pantau stok, pesanan, dan riwayat penjualan untuk usaha makanan, toko, atau jasa.",
  },
  {
    title: "Sistem sesuai kebutuhan",
    text: "Setiap usaha punya cara kerja sendiri. Kami buatkan sistem yang mengikuti alurnya.",
  },
];

export function Services() {
  return (
    <section id="layanan" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Apa yang kami kerjakan</h2>
            <p className="mt-4 max-w-sm leading-relaxed text-muted">
              Jasa pembuatan web dan sistem untuk UMKM yang ingin mulai digitalisasi, tanpa urusan teknis
              yang rumit.
            </p>
          </div>
          <dl className="divide-y divide-line border-y border-line">
            {services.map((s) => (
              <div key={s.title} className="grid gap-1 py-6 md:grid-cols-[14rem_1fr] md:gap-8">
                <dt className="font-semibold">{s.title}</dt>
                <dd className="leading-relaxed text-muted">{s.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
