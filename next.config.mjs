import withNextIntl from 'next-intl/plugin';

const nextIntl = withNextIntl("./src/libs/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: false,
};

export default nextIntl(nextConfig);