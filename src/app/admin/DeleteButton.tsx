"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function DeleteButton({ id, name }: { id: string; name: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function remove() {
    if (!confirm(`Hapus "${name}" dari portofolio?`)) return;
    setBusy(true);
    const res = await fetch(`/api/admin/products/${id}`, { method: "DELETE" });
    setBusy(false);
    if (res.ok) router.refresh();
    else alert((await res.json().catch(() => ({}))).error ?? "Gagal menghapus.");
  }

  return (
    <button
      onClick={remove}
      disabled={busy}
      className="text-sm font-semibold text-red-600 hover:underline disabled:opacity-50"
    >
      {busy ? "Menghapus..." : "Hapus"}
    </button>
  );
}
