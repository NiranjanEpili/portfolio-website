import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.niranjanepili.me';
  const currentDate = new Date().toISOString();
  
  // Get the date one week ago for recently updated pages
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  const recentDate = oneWeekAgo.toISOString();
  
  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: recentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,  // Projects page is updated frequently
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: recentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,  // Blog is updated frequently
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/skills`,
      lastModified: recentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Individual project pages
    {
      url: `${baseUrl}/projects/footprintx`,
      lastModified: recentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects/diksha-collection`,
      lastModified: recentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects/ncompany-inc`,
      lastModified: recentDate, 
      changeFrequency: 'monthly',
      priority: 0.7,
    }
  ];
}
