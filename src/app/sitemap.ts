import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // IMPORTANT: Replace this with your actual production URL once deployed
  const baseUrl = 'https://antonysyengo.vercel.app/';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1, // Homepage is the highest priority
    },
    {
      url: `${baseUrl}/cv`, // From your src/app/cv/page.tsx
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    // Add any future routes here (e.g., /blog, /projects)
  ];
}