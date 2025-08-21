import CallToBanner from '@/components/CallToBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/contact/Hero';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-izi-50 font-sans text-gray-900">
      <CallToBanner />
      <Header />
      <main className="min-h-screen">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}