import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/.next'],
    },
    sitemap: 'https://thestreetguys.com/sitemap.xml',
  };
}
