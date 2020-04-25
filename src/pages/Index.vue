<template>
  <Landing>
    <Presentation />
    <Art />
    <Music />
    <Travel />
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
