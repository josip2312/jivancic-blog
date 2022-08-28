require('./genMetadata').watchPosts();

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'Ivancic Josip',
  description: "Ivancic Josip's blog",
  markdown: {
    theme: 'github-dark',
    lineNumbers: true,
  },
  themeConfig: {
    nav: [
      { text: 'Posts', link: '/' },
      { text: 'Tips', link: '/tips' },
      { text: 'About', link: 'about' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/josip2312' },
      {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/josip-ivancic-b3521a1b4',
      },
      { icon: 'instagram', link: 'https://www.instagram.com/ivancic_josip' },
    ],
  },
};
