const steps = [
  { title: "Diskusi kebutuhan", text: "Ceritakan usaha Anda dan hal yang paling merepotkan saat ini." },
  { title: "Dibuat dan didemokan", text: "Anda melihat hasilnya lebih dulu, memberi masukan, lalu kami sesuaikan." },
  { title: "Dipakai dan didampingi", text: "Sistem berjalan, dan kami membantu jika ada yang perlu disesuaikan." },
];

export function Steps() {
  return (
    <section className="bg-soft px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Cara kerjanya</h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
