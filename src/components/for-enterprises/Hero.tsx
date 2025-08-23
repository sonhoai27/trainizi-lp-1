import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Hero() {
  const t = useTranslations("ForEnterprises.Hero");

  return (
    <section className="hero-section py-16" id="hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("title")} <br />
            <div className="mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              {t("subtitle")}
            </div>
          </h2>
          <p className="text-xl text-gray-700">
            <span className="font-bold text-2xl">218%</span> {t("incomeInfo")}
          </p>
        </div>
        <div className="text-center mb-12">
          <Link
            href="https://calendar.app.google/jE5PFU8BvX9rvNC57"
            target="_blank"
            rel="noopener"
            className="inline-block bg-secondary text-white font-semibold py-3 px-8 rounded-lg hover:bg-red-700 transition-colors"
          >
            {t("bookDemo")}
          </Link>
        </div>
        <div className="images-container grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <div className="md:col-span-2">
            <video
              src="https://storage.googleapis.com/vtcizi/trainizi/lp/RMgKLWfr1IVEsA4vjcrH1pK9Xgg.mp4"
              loop
              autoPlay
              muted
              playsInline
              className="rounded-lg h-full object-cover"
            ></video>
          </div>
          <div className="md:col-span-1 grid grid-cols-1 gap-8">
            <Image
              src="/assets/framer/3TcvLLzZE1NGbvQUHIIX0xmxVp0.jpg"
              alt="Image 02"
              width={400}
              height={300}
              className="rounded-lg h-full object-cover"
            />
            <Image
              src="/assets/framer/WtGH2uQR627jXOraycnBE2wFR4.jpg"
              alt="Image 03"
              width={400}
              height={300}
              className="rounded-lg h-full object-cover"
            />
          </div>
        </div>
        <div className="fact-numbers-container grid grid-cols-1 md:grid-cols-2 gap-8 text-center mt-16">
          <div className="grid gap-8">
            <div>
              <p className="text-5xl font-bold">80%</p>
              <p className="text-gray-600">{t("timeCostSaved")}</p>
            </div>
            <div>
              <p className="text-5xl font-bold">100%</p>
              <p className="text-gray-600">{t("dataProcessed")}</p>
            </div>
          </div>
          <div className="grid gap-8">
            <div>
              <p className="text-5xl font-bold">24/7</p>
              <p className="text-gray-600">{t("qnaBot")}</p>
            </div>
            <div>
              <p className="text-5xl font-bold">{t("swiftly")}</p>
              <p className="text-gray-600">{t("integratedSystem")}</p>
            </div>
          </div>
        </div>
        <p className="text-right text-sm text-gray-500 mt-8">{t("source")}</p>
      </div>
    </section>
  );
}