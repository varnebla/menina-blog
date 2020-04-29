<template>
  <Landing>
    <Presentation />
    <Art>
      <div slot="left-component" class="w-1/2 h-full bg-cover bg-no-repeat bg-center" :style="{ backgroundImage: 'url(' + require('~/assets/images/david.jpg') + ')' }"></div>
      <div slot="right-component" class="w-1/2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices faucibus sem ut laoreet. Sed nec eleifend ex. Aliquam scelerisque pretium lacus, vitae vulputate nisi maximus venenatis.
      </div>
    </Art>
    <Art>
      <div slot="left-component" class="w-1/2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices faucibus sem ut laoreet. Sed nec eleifend ex. Aliquam scelerisque pretium lacus, vitae vulputate nisi maximus venenatis.
      </div>
      <div slot="right-component" class="w-1/2 h-full bg-cover bg-no-repeat bg-center" :style="{ backgroundImage: 'url(' + require('~/assets/images/concert.jpg') + ')' }"></div>
    </Art>
    <Art>
      <div slot="left-component" class="w-1/2 h-full bg-cover bg-no-repeat bg-center" :style="{ backgroundImage: 'url(' + require('~/assets/images/travel.jpg') + ')' }"></div>
      <div slot="right-component" class="w-1/2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices faucibus sem ut laoreet. Sed nec eleifend ex. Aliquam scelerisque pretium lacus, vitae vulputate nisi maximus venenatis.
      </div>
    </Art>
    <ShowPosts />
    <Contact />
  </Landing>
</template>

<script>
import Presentation from '~/components/Landing/Presentation.vue'
import Art from '~/components/Landing/Art.vue'
import Music from '~/components/Landing/Music.vue'
import Travel from '~/components/Landing/Travel.vue'
import ShowPosts from '~/components/Landing/ShowPosts.vue'
import Contact from '~/components/Landing/Contact.vue'

export default {
  components: {
    Presentation,
    Art,
    Music,
    Travel,
    ShowPosts,
    Contact,
  },
  metaInfo: {
    title: '',
  },
}
</script>

<style></style>
