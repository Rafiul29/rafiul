import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://rafiul-islam-dev.vercel.app'

    // আপনার ডাইনামিক পেজগুলোর জন্য (যেমন ব্লগের পোস্ট)
    // আপনি এখানে আপনার ডাটাবেস বা API থেকে ডাটা নিয়ে এসে লুপ চালাতে পারেন।

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // {
        //     url: `${baseUrl}/projects`,
        //     lastModified: new Date(),
        //     changeFrequency: 'weekly',
        //     priority: 0.8,
        // },
        // {
        //     url: `${baseUrl}/projects/apex-learning`,
        //     lastModified: new Date(),
        //     changeFrequency: 'monthly',
        //     priority: 0.6,
        // },

    ]
}