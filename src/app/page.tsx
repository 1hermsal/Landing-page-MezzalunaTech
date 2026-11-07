import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { Products } from "@/components/Products";
import { Process } from "@/components/Process";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { readProducts } from "@/lib/store";

export const revalidate = 300;

export default async function Home() {
  const products = await readProducts();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories products={products} />
        <Products products={products} />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
