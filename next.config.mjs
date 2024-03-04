/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ltsk-cdn.s3.eu-west-1.amazonaws.com",
        port: "",
        pathname: "/jumpstart/Temp_Live/cdn/HLS/Channel/**",
      },
    ],
  },
};

export default nextConfig;
