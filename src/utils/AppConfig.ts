import { LocalePrefixMode } from "next-intl/routing";


const localePrefix: LocalePrefixMode = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: "Trainizi | Adaptive AI Instructor for large-scale Microlearning",
  locales: ["en", "vi"],
  defaultLocale: "en",
  localePrefix,
};
