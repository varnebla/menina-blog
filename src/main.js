// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import LandingLayout from '~/layouts/Landing.vue'
import VueCookies from 'vue-cookies'
import VueSocialSharing from 'vue-social-sharing'
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
  Vue.use(VueSocialSharing)
  // Vue.use(browserDetect)

  head.link.push({
    rel: 'stylesheet',
    href:
      'https://fonts.googleapis.com/css2?family=Yeseva+One&family=Playfair+Display:wght@700&display=swap"',
  })
  head.meta.push({
    key: 'og:title',
    name: 'og:title',
    content: `La menina perdida`,
  })
  head.meta.push({
    key: 'og:description',
    name: 'og:description',
    content: `Para que veas el arte con otros ojos`,
  })
  head.meta.push({
    key: 'og:image',
    name: 'og:image',
    content: `https://res.cloudinary.com/varnebla/image/upload/c_thumb,w_200,g_face/v1596361718/El_caballero_de_la_mano_en_el_pecho_ksmaeb.jpg`,
  })

  head.meta.push({
    key: 'twitter:title',
    name: 'twitter:title',
    content: `La menina perdida`,
  })
  head.meta.push({
    key: 'twitter:description',
    name: 'twitter:description',
    content: `Para que veas el arte con otros ojos`,
  })
  head.meta.push({
    key: 'twitter:card',
    name: 'twitter:card',
    content: `summary`,
  })
  head.meta.push({
    key: 'twitter:creator',
    name: 'twitter:creator',
    content: `@lameninaperdida`,
  })
  head.meta.push({
    key: 'twitter:image',
    name: 'twitter:image',
    content: `https://res.cloudinary.com/varnebla/image/upload/c_thumb,w_200,g_face/v1596361718/El_caballero_de_la_mano_en_el_pecho_ksmaeb.jpg`,
  })

  
}
