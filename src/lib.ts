const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? "6287786011768";

export function waLink(text = "Halo Mezzaluna.Tech, saya mau konsultasi") {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}
