'use client';

import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

const CTA = () => {
  const t = useTranslations('CTA');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    learners: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  interface FormErrors {
    name?: string;
    phone?: string;
    email?: string;
    company?: string;
  }

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = t('nameRequired');
    if (!formData.phone) newErrors.phone = t('phoneRequired');
    if (!formData.email) {
      newErrors.email = t('emailRequired');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('emailInvalid');
    }
    if (!formData.company) newErrors.company = t('companyRequired');
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          purpose: formData.learners,
          source: 'For Enterprises Page',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          company: '',
          learners: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="cta-section bg-gray-100 py-16" id="cta">
      <div className="container mx-auto px-4">
        <div className="cta-container bg-gradient-to-b from-gradient-blue-start to-gradient-blue-end rounded-lg p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">{t("title")}</h3>
          <p className="mb-8">{t("subtitle")}</p>
          <div className="form-container max-w-lg mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={t("namePlaceholder")}
                    className={`w-full p-3 rounded-lg text-gray-900 ${
                      errors.name ? "border border-red-500" : ""
                    }`}
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-left text-sm mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="phone"
                    placeholder={t("phonePlaceholder")}
                    className={`w-full p-3 rounded-lg text-gray-900 ${
                      errors.phone ? "border border-red-500" : ""
                    }`}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-left text-sm mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={t("emailPlaceholder")}
                    className={`w-full p-3 rounded-lg text-gray-900 ${
                      errors.email ? "border border-red-500" : ""
                    }`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-left text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder={t("companyPlaceholder")}
                    className={`w-full p-3 rounded-lg text-gray-900 ${
                      errors.company ? "border border-red-500" : ""
                    }`}
                    value={formData.company}
                    onChange={handleChange}
                  />
                  {errors.company && (
                    <p className="text-red-500 text-left text-sm mt-1">
                      {errors.company}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <select
                  name="learners"
                  className="w-full p-3 rounded-lg text-gray-500"
                  value={formData.learners}
                  onChange={handleChange}
                >
                  <option value="">{t("learnersPlaceholder")}</option>
                  <option value="<100">{t("learnersOption1")}</option>
                  <option value="100-500">{t("learnersOption2")}</option>
                  <option value="500-2000">{t("learnersOption3")}</option>
                  <option value="2000-5000">{t("learnersOption4")}</option>
                  <option value="5000-10000">{t("learnersOption5")}</option>
                  <option value=">10000">{t("learnersOption6")}</option>
                </select>
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder={t("messagePlaceholder")}
                  className="w-full p-3 rounded-lg text-gray-900"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-red-700 text-white font-bold py-3 px-4 rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? t("submitting") : t("submitButton")}
              </button>
              {submitStatus === "success" && (
                <p className="text-green-300 mt-4">{t("successMessage")}</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-300 mt-4">{t("errorMessage")}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;