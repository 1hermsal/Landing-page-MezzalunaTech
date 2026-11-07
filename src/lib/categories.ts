export type Category = { id: string; name: string; text: string; icon: "globe" | "chart" | "box" | "pen" };

export const categories: Category[] = [
  {
    id: "Website & toko online",
    name: "Website & toko online",
    text: "Halaman usaha yang cepat dibuka di HP, lengkap dengan katalog dan keranjang belanja.",
    icon: "globe",
  },
  {
    id: "Dashboard pembukuan",
    name: "Dashboard pembukuan",
    text: "Pemasukan, pengeluaran, dan laba tercatat rapi dalam satu layar.",
    icon: "chart",
  },
  {
    id: "Stok & order",
    name: "Stok & order",
    text: "Stok barang dan pesanan terpantau tanpa perlu rekap manual.",
    icon: "box",
  },
  {
    id: "Sistem kustom",
    name: "Sistem kustom",
    text: "Punya alur kerja sendiri? Kami buatkan sistem yang mengikutinya.",
    icon: "pen",
  },
];

export const categoryIds = categories.map((c) => c.id);
