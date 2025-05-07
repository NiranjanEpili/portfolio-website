import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/temp/',
          '/*.json$',
          '/*.xml$',
          '/_next/',
          '/cdn-cgi/'
        ]
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
        crawlDelay: 2
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
        crawlDelay: 2
      }
    ],
    sitemap: 'https://www.niranjanepili.me/sitemap.xml',
    host: 'https://www.niranjanepili.me',
  };
}
