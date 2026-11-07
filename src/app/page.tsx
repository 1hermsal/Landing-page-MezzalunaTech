import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Steps } from "@/components/Steps";
import { Products } from "@/components/Products";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Steps />
        <Products />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
