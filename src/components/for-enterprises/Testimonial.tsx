import { useTranslations } from 'next-intl';
import React from 'react';
import Image from 'next/image';
import TrustedBy from './TrustedBy';

const Testimonial = () => {
  const t = useTranslations('Testimonial');

  return (
    <div className="testimonial-section py-16" id="testimonial">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900">{t("title")}</h3>
        </div>
        <TrustedBy />
        <div className="testimonial-cards-container grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="testimonial-card bg-white rounded-lg p-8">
            <div className="client-info flex items-center mb-4">
              <div className="client-image rounded-full overflow-hidden mr-4">
                <Image
                  className="w-[60px] h-[60px] object-cover"
                  src="/assets/framer/g0tiRBVzunK9dsgPZLvNgkNSpk.webp"
                  alt="Mina Chung"
                  width={60}
                  height={60}
                />
              </div>
              <div className="flex-1">
                <p className="font-semibold">{t("minaChungName")}</p>
                <p className="text-sm text-gray-600">{t("minaChungRole")}</p>
              </div>
            </div>
            <p className="text-gray-700">{t("minaChungQuote")}</p>
          </div>
          <div className="testimonial-card bg-white rounded-lg p-8">
            <div className="client-info flex items-center mb-4">
              <div className="client-image rounded-full overflow-hidden mr-4">
                <Image
                  className="w-[60px] h-[60px] object-cover"
                  src="/assets/framer/NMAfad39LLmpizMa75ymPNxdJNA.png"
                  alt="James Cooper"
                  width={60}
                  height={60}
                />
              </div>
              <div className="flex-1">
                <p className="font-semibold">{t("jamesCooperName")}</p>
                <p className="text-sm text-gray-600">{t("jamesCooperRole")}</p>
              </div>
            </div>
            <p className="text-gray-700">{t("jamesCooperQuote")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;