import Hero from '@/components/Hero';
import Features from '@/components/Features';
import MediaTestimonials from '@/components/MediaTestimonials';
import NewsletterSignup from '@/components/NewsletterSignup';

import { getTranslations, setRequestLocale } from "next-intl/server";
import WowWrapper from '@/components/WowWrapper';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function HomePage(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-izi-50 font-sans text-gray-900">
      <main className=''>
        <WowWrapper />
        <Hero />
        <Features />
        <MediaTestimonials />
        <NewsletterSignup />
      </main>
    </div>
  );
}