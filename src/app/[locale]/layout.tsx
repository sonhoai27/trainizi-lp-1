import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/libs/i18nNavigation";
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
  params: any;
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    metadataBase: new URL('https://trainizi.com'),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
        'vi': '/vi',
      },
    },
    title: t('title'),
    description: t('description'),
    icons: {
      icon: '/assets/logo.webp',
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://trainizi.com',
      siteName: 'Trainizi',
      images: [
        {
          url: 'https://trainizi.com/assets/banner.webp',
          width: 800,
          height: 600,
        },
        {
          url: 'https://trainizi.com/assets/banner.webp',
          width: 1800,
          height: 1600,
          alt: 'Trainizi',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      siteId: '1467726470533754880',
      creator: '@trainizi',
      creatorId: '1467726470533754880',
      images: ['https://trainizi.com/assets/banner.webp'],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  // Using internationalization in Client Components
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.className} bg-[linear-gradient(rgb(255,239,241)_0%,rgb(255,253,253)_100%)]`}>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"
          integrity="sha512-Eak/29OTpb36LLo2r47IpVzPBLXnAMPAVypbSZiZ4Qkf8p/7S/XRG5xp7OKWPPYfJT6metI+IORkR5G8F900+g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></script>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {props?.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}