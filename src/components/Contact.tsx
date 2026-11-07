import { Button } from "./Button";
import { waLink } from "@/lib";

export function Contact() {
  return (
    <section id="kontak" className="bg-brand px-5 py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
          Siap pindah dari buku tulis ke sistem digital?
        </h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed">
          Chat kami lewat WhatsApp. Ceritakan usaha Anda, kami bantu cari yang paling pas.
        </p>
        <Button href={waLink()} target="_blank" rel="noopener noreferrer" variant="white" className="mt-8">
          Chat WhatsApp sekarang
        </Button>
      </div>
    </section>
  );
}
