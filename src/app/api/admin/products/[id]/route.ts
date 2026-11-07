import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAdmin } from "@/lib/auth";
import { readProducts, removeImage, writeProducts } from "@/lib/store";

export async function DELETE(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  if (!(await isAdmin())) return NextResponse.json({ error: "Sesi berakhir. Silakan masuk lagi." }, { status: 401 });

  const { id } = await ctx.params;
  const items = await readProducts();
  const target = items.find((p) => p.id === id);
  if (!target) return NextResponse.json({ error: "Produk tidak ditemukan." }, { status: 404 });

  await writeProducts(items.filter((p) => p.id !== id));
  await removeImage(target.image);
  if (target.tabletImage) await removeImage(target.tabletImage);
  revalidatePath("/");
  revalidatePath("/admin");
  return NextResponse.json({ ok: true });
}
