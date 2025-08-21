import { setRequestLocale } from "next-intl/server";

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="w-full"
      
    >
      {props.children}
    </div>
  );
}
