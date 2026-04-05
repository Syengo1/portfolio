import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // IMPORTANT: Replace this with your actual production URL
  const baseUrl = 'https://antonysyengo.vercel.app/';

  return {
    rules: {
      userAgent: '*', // Applies to all search engine bots
      allow: '/',     // Allows crawling of the entire site
      // disallow: '/private/', // Example: Use this to hide specific folders or draft pages
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Points crawlers to your generated sitemap
  };
}