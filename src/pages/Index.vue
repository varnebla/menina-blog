<template>
  <Landing>
    <section id="presentation" class="w-full h-142 mobileS:h-156 tablet:h-172 grid grid-cols-12 mb-16 tablet:mb-32">
      <Slogan class="col-start-3 col-span-8 tablet:col-start-2 desktop:col-start-1 tablet:col-span-5 desktop:col-span-4"/>
      <Presentation class="hidden mobileL:inline col-start-9  laptop:col-start-8 desktop:col-start-6 col-span-4 laptop:col-span-5 desktop:col-span-4" :picture="landingInfo.presentation_picture"/>
      <PresentationSmall class="hidden desktop:inline desktop:col-start-10 desktop:col-span-3" :picture="landingInfo.presentation_secondary_picture"/>
    </section>
    <section>
    </section>
    <section id="introduction" class="mb-24 tablet:mb-32">
      <IntroInfo class="mb-12"/>
      <IntroPic :option="landingInfo.intro_picture"/>
    </section>
    <section class="mb-32 max-w-3xl mx-auto">
      <ArtInfo />
      <Art :option="primaryArt" :odd="true"/>
      <Art :option="secondaryArt" :odd="false"/>
    </section>
  </Landing>
</template>


<page-query>
query Landing{
  landing: allLanding{
      edges{
        node{
          presentation_picture
          presentation_secondary_picture
          intro_picture
          art_primary_picture
          art_secondary_picture
        }
      }
    }
}
</page-query>

<script>
import Slogan from '~/components/Landing/Slogan.vue'
import Presentation from '~/components/Landing/Presentation.vue'
import PresentationSmall from '~/components/Landing/PresentationSmall.vue'
import IntroInfo from '~/components/Landing/IntroInfo.vue'
import IntroPic from '~/components/Landing/IntroPic.vue'
import ArtInfo from '~/components/Landing/ArtInfo.vue'
import Art from '~/components/Landing/Art.vue'

export default {
  components: {
    Slogan,
    Presentation,
    PresentationSmall,
    IntroInfo,
    IntroPic,
    ArtInfo,
    Art,
  },
  computed: {
    landingInfo() {
      return this.$page.landing.edges[0].node
    },
    primaryArt() {
      return {
        title: 'Cats are fats i like to pets them they like to meow ',
        content:
          'Bathe private parts with tongue then lick owners face meow meow but toy mouse squeak roll over for pretend you want to go out but then dont but cry louder at reflection so jump on human and sleep on her all night long be long in the bed',
        image: this.landingInfo.art_primary_picture,
      }
    },
    secondaryArt() {
      return {
        title: 'Kitty poochy bite off humans toes so find box',
        content:
          'Poop in litter box, scratch the walls catto munch salmono, hell is other people. With tail in the air cereal boxes make for five star accommodation yet white cat sleeps on a black shirt and spend six hours per day washing,',
        image: this.landingInfo.art_secondary_picture,
      }
    },
  },
}
</script>

<style scoped>
</style>