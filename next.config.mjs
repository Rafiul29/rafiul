/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Next.js will use these formats to optimize your PNGs/JPGs
        formats: ["image/avif", "image/webp"],

        // These are the widths Next.js will generate for different devices
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    compress: true,
    productionBrowserSourceMaps: false,

    experimental: {
        optimizePackageImports: [
            "lucide-react",
            "react-icons",
            "react-slick", // Added this to help your certifications slider load faster
        ],
    },

    async headers() {
        return [
            {
                source: "/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;