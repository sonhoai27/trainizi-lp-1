'use client'

import { useTranslations } from "next-intl";

const BlogTitle = () => {
  const t = useTranslations("blog");

  return (
    <section className="bg-framer-light-purple py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-black mb-6">
          {t("title")}
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          {t("description")}
        </p>
      </div>
    </section>
  );
}

export default BlogTitle;