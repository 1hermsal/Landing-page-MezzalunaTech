"use client";

import { useActionState } from "react";
import { login } from "./actions";

export function LoginForm() {
  const [state, action, pending] = useActionState(login, undefined);
  return (
    <form action={action} className="mt-8 space-y-4">
      <label className="block text-sm font-semibold" htmlFor="password">
        Kata sandi admin
      </label>
      <input
        id="password"
        name="password"
        type="password"
        required
        autoFocus
        autoComplete="current-password"
        className="w-full rounded-lg border border-line px-4 py-3 outline-none focus:border-brand"
      />
      {state?.error && <p role="alert" className="text-sm text-red-600">{state.error}</p>}
      <button
        disabled={pending}
        className="w-full rounded-lg bg-brand px-5 py-3 font-semibold text-white transition-colors hover:bg-brand-hover disabled:opacity-60"
      >
        {pending ? "Memeriksa..." : "Masuk"}
      </button>
    </form>
  );
}
