/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com'],
    },
    env: {
        NEXT_PUBLIC_SERVER_BASE_URL: "https://burgerhub00.github.io",
        NEXTAUTH_SECRET: 'mQ46qpFwfE1BHuqMC+qlm19qBAD9fVPgh28werwe3ASFlAfnKjM=',
    },
};

export default nextConfig;
