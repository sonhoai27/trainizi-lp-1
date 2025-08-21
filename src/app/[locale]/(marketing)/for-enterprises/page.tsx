import CallToBanner from "@/components/CallToBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/for-enterprises/Hero";
import Service from "@/components/for-enterprises/Service";
import Testimonial from "@/components/for-enterprises/Testimonial";
import Feature from "@/components/for-enterprises/Feature";
import CTA from "@/components/for-enterprises/CTA";

export default async function AboutPage() {
  return (
    <div
      className="min-h-screen font-sans text-gray-900"
      style={{
        background:
          "linear-gradient(rgb(255, 239, 241) 0%, rgb(255, 239, 241) 52.8814%, rgb(245, 245, 255) 100%)",
      }}
    >
      <CallToBanner />
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Service />
        <Testimonial />
        <Feature />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
