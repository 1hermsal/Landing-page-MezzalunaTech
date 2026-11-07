import type { ComponentProps } from "react";

const styles = {
  primary: "bg-brand text-white hover:bg-brand-hover",
  dark: "bg-ink text-white hover:bg-black",
  outline: "border border-line bg-white text-ink hover:border-ink",
  white: "bg-white text-ink hover:bg-soft",
} as const;

type Props = ComponentProps<"a"> & { variant?: keyof typeof styles };

export function Button({ variant = "primary", className = "", ...props }: Props) {
  return (
    <a
      {...props}
      className={`inline-flex items-center justify-center rounded-lg px-5 py-3 text-[15px] font-semibold transition-colors ${styles[variant]} ${className}`}
    />
  );
}
