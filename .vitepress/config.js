require('./genMetadata').watchPosts();

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'Ivancic Josip',
  description:
    "Ivancic Josip's website, here you can find my blog posts on web development and lifestyle, tips and some information about me.",
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
    lineNumbers: true,
  },
  themeConfig: {
    siteTitle: 'Blog',
    nav: [
      {
        text: 'Posts',
        link: '/',
        title: 'Blog Posts',
      },
      { text: 'Tips', link: '/tips' },
      { text: 'About', link: 'about' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/josip2312' },
      {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/josip-ivancic-b3521a1b4',
      },
    ],
    footer: {
      copyright: '© 2021-present Josip Ivancic',
    },
  },
  head: [['link', { rel: 'icon', href: '/assets/favicon.ico' }]],
  sitemap: {
    hostname: 'https://jivancic.com/',
  },
};
