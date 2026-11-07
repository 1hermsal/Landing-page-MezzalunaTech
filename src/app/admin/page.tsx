import type { Metadata } from "next";
import Image from "next/image";
import { adminConfigured, isAdmin } from "@/lib/auth";
import { readProducts, storageReady } from "@/lib/store";
import { logout } from "./actions";
import { LoginForm } from "./LoginForm";
import { ProductForm } from "./ProductForm";
import { DeleteButton } from "./DeleteButton";

export const metadata: Metadata = { title: "Admin - Mezzaluna.Tech", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

function Shell({ children, wide }: { children: React.ReactNode; wide?: boolean }) {
  return (
    <main className="min-h-screen bg-soft px-5 py-12">
      <div className={`mx-auto ${wide ? "max-w-5xl" : "max-w-sm"}`}>{children}</div>
    </main>
  );
}

export default async function AdminPage() {
  if (!adminConfigured()) {
    return (
      <Shell>
        <h1 className="text-2xl font-bold">Admin belum aktif</h1>
        <p className="mt-3 leading-relaxed text-muted">
          Isi variabel <code className="rounded bg-white px-1.5 py-0.5">ADMIN_PASSWORD</code> (minimal 8 karakter) di{" "}
          <code className="rounded bg-white px-1.5 py-0.5">.env.local</code> atau di pengaturan Vercel, lalu jalankan ulang.
        </p>
      </Shell>
    );
  }

  if (!(await isAdmin())) {
    return (
      <Shell>
        <h1 className="text-2xl font-bold">Masuk admin</h1>
        <p className="mt-2 text-muted">Khusus pengelola Mezzaluna.Tech.</p>
        <LoginForm />
      </Shell>
    );
  }

  const products = await readProducts();

  return (
    <Shell wide>
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Kelola portofolio</h1>
        <div className="flex items-center gap-5 text-sm font-semibold">
          <a href="/" target="_blank" className="hover:text-brand-text">Lihat situs</a>
          <form action={logout}>
            <button className="text-muted hover:text-ink">Keluar</button>
          </form>
        </div>
      </div>

      {!storageReady && (
        <p className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          Penyimpanan belum disiapkan, jadi produk baru belum bisa disimpan. Sambungkan Vercel Blob ke proyek ini
          (variabel BLOB_READ_WRITE_TOKEN).
        </p>
      )}

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <section className="rounded-xl border border-line bg-white p-6 md:p-8">
          <h2 className="text-lg font-bold">Tambah produk</h2>
          <div className="mt-6">
            <ProductForm />
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold">Produk saat ini ({products.length})</h2>
          <ul className="mt-4 space-y-3">
            {products.map((p) => (
              <li key={p.id} className="flex items-center gap-4 rounded-xl border border-line bg-white p-3">
                <Image
                  src={p.image}
                  alt=""
                  width={96}
                  height={60}
                  className="h-[60px] w-24 flex-none rounded-md border border-line object-cover object-top"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold">{p.name}</p>
                  <p className="truncate text-sm text-muted">{p.category}</p>
                </div>
                <DeleteButton id={p.id} name={p.name} />
              </li>
            ))}
            {products.length === 0 && <li className="text-muted">Belum ada produk.</li>}
          </ul>
        </section>
      </div>
    </Shell>
  );
}
