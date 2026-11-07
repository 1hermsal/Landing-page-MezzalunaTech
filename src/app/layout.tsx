import type { Metadata } from "next";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mezzaluna.Tech - Web dan sistem digital untuk UMKM",
  description:
    "Mezzaluna.Tech membantu UMKM pindah dari buku tulis ke sistem digital: website, dashboard pembukuan, stok dan order.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
