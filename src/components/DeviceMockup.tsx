import Image from "next/image";

type Props = { name: string; desktop: string; tablet?: string };

/** Bingkai monitor PC + tablet. Bila gambar tablet tidak ada, gambar desktop dipotong untuk layar tablet. */
export function DeviceMockup({ name, desktop, tablet }: Props) {
  return (
    <div className="relative pb-3">
      <div className="w-[88%]">
        <div className="rounded-xl bg-ink p-[2.5%] pb-[3%] shadow-lg">
          <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-white">
            <Image
              src={desktop}
              alt={`Tampilan ${name} di komputer`}
              fill
              sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 90vw"
              className="object-cover object-left-top"
            />
          </div>
        </div>
        <div className="mx-auto h-5 w-[14%] bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400" />
        <div className="mx-auto h-1.5 w-[32%] rounded-b-xl bg-neutral-400" />
      </div>

      <div className="absolute bottom-0 right-0 w-[38%] rounded-2xl bg-ink p-[2.2%] shadow-xl ring-1 ring-black/10">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white">
          <Image
            src={tablet ?? desktop}
            alt={`Tampilan ${name} di tablet`}
            fill
            sizes="150px"
            className="object-cover object-left-top"
          />
        </div>
      </div>
    </div>
  );
}
