import Image from "next/image";
import { Button } from "./Button";
import { waLink } from "@/lib/whatsapp";

export function Contact() {
  return (
    <section id="kontak" className="px-5 py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-tl-[4rem] rounded-br-[4rem] rounded-bl-2xl rounded-tr-2xl bg-brand text-white md:grid-cols-[1fr_1.2fr] md:rounded-tl-[6rem] md:rounded-br-[6rem]">
        <div className="relative hidden min-h-72 md:block">
          <Image
            src="/image/banner/contact-image.jpg"
            alt=""
            fill
            sizes="480px"
            className="object-cover object-left-top"
          />
        </div>
        <div className="p-8 md:p-14">
          <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            USAHAMU INGIN MIGRASI DARI MANUAL KE DIGITAL ?
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed">
            Kirim pesan lewat WhatsApp. Kami bantu cari sistem yang paling cocok untuk usaha Anda.
          </p>
          <Button href={waLink()} target="_blank" rel="noopener noreferrer" variant="white" className="mt-8">
            Kirim pesan
          </Button>
        </div>
      </div>
    </section>
  );
}
