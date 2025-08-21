import { useTranslations } from 'next-intl';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Advisors from '@/components/about/Advisors';
import Hero from '@/components/about/Hero';
import Mission from '@/components/about/Mission';
import Story from '@/components/about/Story';
import Team from '@/components/about/Team';
import CTA from '@/components/CTA';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div className="min-h-screen font-sans text-gray-900">
      <Header />
      <main className="min-h-screen">
        <Hero
          title={t('hero.title')}
          subtitle={t('hero.subtitle')}
          image1={t('hero.image1')}
          image2={t('hero.image2')}
          image3={t('hero.image3')}
        />
        <Story
          title={t('story.title')}
          content1={t('story.content1')}
          content2={t('story.content2')}
          image={t('story.image')}
        />
        <Mission
          title={t('mission.title')}
          content={t('mission.content')}
          image={t('mission.image')}
        />
        <Team title={t('team.title')} />
        <Advisors title={t('advisors.title')} />
        <CTA
          title={t('journey.title')}
          subtitle={t('journey.subtitle')}
          buttonText="Learn More"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}