/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://wajid-portfolio.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
} 