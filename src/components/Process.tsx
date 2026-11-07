const steps = [
  {
    title: "Ceritakan kendala usaha",
    text: "Kirim pesan lewat WhatsApp dan jelaskan pekerjaan apa yang paling menyita waktu saat ini.",
  },
  {
    title: "Lihat demonya",
    text: "Kami siapkan contoh sistem. Anda mencoba, memberi masukan, lalu kami perbaiki.",
  },
  {
    title: "Mulai dipakai",
    text: "Setelah cocok, sistem langsung bisa dipakai dan kami tetap membantu bila ada penyesuaian.",
  },
];

export function Process() {
  return (
    <section id="cara-kerja" className="px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Dari obrolan sampai dipakai</h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t-2 border-brand pt-6">
              <span className="text-sm font-bold text-brand-text">Langkah {i + 1}</span>
              <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
