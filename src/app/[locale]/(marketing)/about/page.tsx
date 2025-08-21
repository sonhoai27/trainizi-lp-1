import CallToBanner from '@/components/CallToBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/about/Hero';
import Story from '@/components/about/Story';
import Mission from '@/components/about/Mission';
import Team from '@/components/about/Team';
import Advisors from '@/components/about/Advisors';
import Journey from '@/components/about/Journey';

export default async function AboutPage() {
  return (
    <div
      className="min-h-screen font-sans text-gray-900"
      style={{
        background:
          'linear-gradient(rgb(255, 239, 241) 0%, rgb(255, 239, 241) 52.8814%, rgb(245, 245, 255) 100%)',
      }}
    >
      <CallToBanner />
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Story />
        <Mission />
        <Team />
        <Advisors />
        <Journey />
      </main>
      <Footer />
    </div>
  );
}