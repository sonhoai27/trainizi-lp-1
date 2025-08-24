'use client';

import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

const ContactForm = () => {
  const t = useTranslations('contact.form');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    purpose: '',
    source: '',
  });

  interface FormErrors {
    name?: string;
    phone?: string;
    email?: string;
    company?: string;
  }

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          company: '',
          purpose: '',
          source: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder={t("name")}
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600`}
          />
          {errors.name && (
            <p className="text-red-500 text-left text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="phone"
            placeholder={t("phone")}
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600`}
          />
          {errors.phone && (
            <p className="text-red-500 text-left text-sm mt-1">
              {errors.phone}
            </p>
          )}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder={t("email")}
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600`}
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
            placeholder={t("company")}
            value={formData.company}
            onChange={handleChange}
            className={`w-full px-4 py-3 border ${errors.company ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600`}
          />
          {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
        </div>
        <div>
          <textarea
            name="purpose"
            placeholder={t("purpose")}
            rows={4}
            value={formData.purpose}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div>
          <select
            name="source"
            value={formData.source}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-500"
          >
            <option value="" disabled>
              {t("source")}
            </option>
            <option value="Referral">{t("referral")}</option>
            <option value="Social Media">{t("social")}</option>
            <option value="Trainizi's Blog">{t("blog")}</option>
            <option value="Press/Media">{t("media")}</option>
            <option value="Others">{t("others")}</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 px-6 rounded-[32px] hover:bg-purple-700 transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? t("submitting") : t("submit")}
        </button>
        {submitStatus === "success" && (
          <p className="text-green-500 mt-4">{t("successMessage")}</p>
        )}
        {submitStatus === "error" && (
          <p className="text-red-500 mt-4">{t("errorMessage")}</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;