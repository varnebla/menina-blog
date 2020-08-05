// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import LandingLayout from '~/layouts/Landing.vue'
import VueCookies from 'vue-cookies'
// import browserDetect from 'vue-browser-detect-plugin'
import '~/assets/css/tailwind.css'
import '~/assets/css/styles.css'
// require('typeface-playfair-display')
require('typeface-noto-serif-kr')
// require('typeface-yeseva-one')
require('typeface-rubik')

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('Landing', LandingLayout)
  head.bodyAttrs = { class: 'font-sans font-light bg-background' }
  Vue.use(VueCookies)
  // Vue.use(browserDetect)

  head.link.push({
    rel: 'stylesheet',
    href:
      'https://fonts.googleapis.com/css2?family=Mushli&family=Yeseva+One&family=Playfair+Display:wght@700&display=swap"',
  })
}
