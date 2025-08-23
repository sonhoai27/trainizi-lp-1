import withNextIntl from 'next-intl/plugin';

const nextIntl = withNextIntl("./src/libs/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    localPatterns: [
      {
        pathname: "/assets/images/**",
        search: "",
      },
      {
        pathname: "/assets/framer/**",
        search: "",
      },
    ],
    domains: [],
    remotePatterns: [],
  },
  compiler: {},
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextIntl(nextConfig);