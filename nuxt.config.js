export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'front-end',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      { src: '/js/jquery-3.4.1.min.js' },
      { src: '/js/bootstrap.bundle.min.js' },
      { src: '/js/owl.carousel.min.js' },
      { src: '/js/jquery-te-1.4.0.min.js' },
      { src: '/js/selectize.min.js' },
      { src: '/js/upvote.vanilla.js' },
      { src: '/js/upvote-script.js' },
      { src: '/js/jquery.multi-file.min.js' },
      { src: '/js/main.js' },

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/bootstrap.min.css',
    '~assets/css/line-awesome.css',
    '~assets/css/owl.carousel.min.css',
    '~assets/css/owl.theme.default.min.css',
    '~assets/css/selectize.css',
    '~assets/css/style.css',
    '~assets/css/transition.css',
    '~assets/css/element.css',
    '~assets/css/jquery-te-1.4.0.css',
    '~assets/css/upvotejs.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-element-ui',
      '@nuxtjs/axios',
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // publicPath: 'https://unpkg.com/element-ui/lib/theme-chalk/index.css',
    extend(config, { isClient }) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.devtool = 'inline-source-map'
      }
    }
  },

  vue: {
    config: {
      productionTip: true,
      devtools: true
    }
  }
}
