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
    ],
    domains: ["framerusercontent.com"], // Thêm dòng này
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  compiler: {
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextIntl(nextConfig);