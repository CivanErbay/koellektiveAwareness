// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  name: 'Köllektive Awareness',
  description: 'Safer Space Awareness Coaching',
  //logo: 'i-noto:cat-face',
  logo: 'LOGO',
  author: 'Civan Erbay',
  defaultLocale: 'de', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default
  nav: [
    { text: 'Angebote', link: '/', type: 'primary', icon: 'i-mdi-home' },
    { text: 'Projekte', link: '/projects', type: 'primary', icon: 'i-mdi-home' },
    { text: 'Mitmachen', link: '/volunteer', type: 'primary', icon: 'i-mdi-home' },
    // {
    //   text: 'Donate',
    //   link: '/quick-start',
    //   type: 'secondary',
    //   icon: 'i-mdi-home',
    // },
    // {
    //   text: 'Articles',
    //   link: '/articles',
    //   type: 'secondary',
    //   icon: 'i-mdi-home',
    // },
    // { text: 'Blog', link: '/blog', type: 'secondary', icon: 'i-mdi-home' },
    // {
    //   text: 'Volunteer',
    //   link: '/volunteer',
    //   type: 'secondary',
    //   icon: 'i-mdi-home',
    // },
  ],
}
