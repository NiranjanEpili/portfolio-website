import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.niranjanepili.me/sitemap.xml',
    host: 'https://www.niranjanepili.me',
  };
}
