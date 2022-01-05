/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts", "page.js"],
  images: {
    domains: ["files.stripe.com", "tailwindui.com"],
  },
};
