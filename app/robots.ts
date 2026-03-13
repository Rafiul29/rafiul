import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://rafiul-islam-dev.vercel.app'

    return {
        rules: {
            userAgent: '*', // সব সার্চ ইঞ্জিনের জন্য প্রযোজ্য
            allow: '/',     // পুরো সাইট ক্রল করার অনুমতি দিন
            disallow: [
                '/api/',      // API রাউটগুলো ইনডেক্স করার দরকার নেই
                '/dashboard/',    // যদি কোনো ড্যাশবোর্ড বা অ্যাডমিন প্যানেল থাকে
            ],
        },
        // গুগলকে আপনার সাইটম্যাপের লোকেশন জানানো
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}