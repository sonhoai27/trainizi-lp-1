import Journey from '@/components/about/Journey';
import Story from '@/components/about/Story';
import Vision from '@/components/about/Vision';
import Team from '@/components/about/Team';
import Advisors from '@/components/about/Advisors';
import CTA from '@/components/CTA';

export default function AboutPage() {
  return (
    <div
      className="min-h-screen font-sans text-gray-900"
    >
      <main className="min-h-screen flex flex-col mx-auto max-w-[2018px]">
        <Journey />
        <Story />
        <Vision />
        <Team />
        <Advisors />
        <CTA />
      </main>
    </div>
  );
}