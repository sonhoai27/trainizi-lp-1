import { Inter } from 'next/font/google';
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/libs/i18nNavigation";
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Trainizi - AI-Powered Educational Platform',
  description: 'Transform your learning experience with Trainizi',
};

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
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {props?.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}