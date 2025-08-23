import { setRequestLocale } from 'next-intl/server';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="w-full">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
