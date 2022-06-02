export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'kompletecare-nuxt',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/apollo',
  ],

  bootstrapVue: {
    icons: true // Install the IconsPlugin
  },


  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://testdrive.kompletecare.com/graphql',
        httpLinkOptions: {
          fetchOptions: {
            mode: 'no-cors' //Cors Needed for external Cross origins, need to allow headers from server
          },
          headers: {
            "Authorization": "Bearer 11|BT6aPIowwhccFdbT8ZxAI7sMuvgYeFaDZCQMX8kG"
          }
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
