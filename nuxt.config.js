const pkg = require('./package')

module.exports = {
  mode: 'spa',

  head: {
    title: '황희영의 포트폴리오',
    htmlAttrs: {
      lang: 'ko',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'description',
        content: '황희영의 포트폴리오',
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { property: 'og:title', content: '황희영의 포트폴리오' },
      { property: 'og:description', content: '헤이! 안녕 헤이!🙌' },
      {
        property: 'og:image',
        content: 'https://images.velog.io/post-images/chris/892e0f80-278d-11e9-a56f-a10040ddcb91/heithumbnailx600.png',
      },
      {
        'http-equiv': 'x-ua-compatible',
        content: 'ie=edge',
      },
    ],
    link: [
      {
        rel: 'shortcut icon',
        href:
          'https://res.cloudinary.com/dvcuac7zg/image/upload/c_scale,w_128/v1549212513/heihei/KakaoTalk_Photo_2019-02-04-01-48-06.png',
      },
      // {
      //   rel: 'stylesheet',
      //   type: 'text/css',
      //   href: 'https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css',
      // },
    ],
    script: [
      {
        src: 'https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver',
        crossorigin: 'anonymous',
      },
    ],
  },

  loading: { color: '#3B8070' },

  css: [],

  // plugins: [{ src: `~plugins/plugins`, ssr: false }],

  modules: [],
  plugins: [{ src: `~plugins/plugins.js`, ssr: false }],
  build: {
    vendor: ['vue-vimeo-player'],
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
