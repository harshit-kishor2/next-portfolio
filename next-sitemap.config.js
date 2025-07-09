/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://harshit-resume.netlify.app', // 🔁 Replace with your domain
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000,
  exclude: ['/private', '/secret-page'], // optional
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      // { userAgent: 'Googlebot', disallow: '/private' }, // optional
    ],
  },
};
