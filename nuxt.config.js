import axios from 'axios';

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'blog',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {href: 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap', rel: 'stylesheet'}
    ]
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    {src: '~/assets/scss/main.scss', lang: 'scss'}
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/app-components.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}

}
