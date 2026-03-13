/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
    productionBrowserSourceMaps: false,
    // Disabling the indicator slightly reduces main-thread noise in dev/prod
    devIndicators: {
        appIsrStatus: false,
    },
    images: {
        // Next.js will use these formats to optimize your PNGs/JPGs
        formats: ["image/avif", "image/webp"],

        // These are the widths Next.js will generate for different devices
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 31536000,
    },

    compress: true,
    productionBrowserSourceMaps: false,

    experimental: {
        optimizePackageImports: [
            "lucide-react",
            "react-icons",
            "react-slick",
            "motion",
            "@better-auth/cli"
        ]
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
            {
                // Help reduce INP by telling the browser to prioritize 
                // security headers without blocking rendering
                source: "/(.*)",
                headers: [
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "X-Frame-Options",
                        value: "DENY",
                    },
                    {
                        key: "Referrer-Policy",
                        value: "strict-origin-when-cross-origin",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;