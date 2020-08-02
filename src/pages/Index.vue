<template>
  <Landing>
    <section id="presentation" class="w-full h-142 mobileS:h-156 tablet:h-172 grid grid-cols-12 mb-16 tablet:mb-32">
      <Slogan class="col-start-3 col-span-8 tablet:col-start-2 desktop:col-start-2 tablet:col-span-5 desktop:col-span-4"/>
      <Presentation class="hidden mobileL:inline col-start-9  laptop:col-start-8 desktop:col-start-7 col-span-4 laptop:col-span-5 desktop:col-span-4"/>
      <PresentationSmall class="hidden desktop:inline desktop:col-start-11 desktop:col-span-2"/>
    </section>
    <section>
    </section>
    <section id="introduction" class="mb-24 tablet:mb-32">
      <IntroInfo class="mb-12"/>
      <IntroPic/>
    </section>
    <section class="mb-32 max-w-3xl mx-auto">
      <ArtInfo />
    </section>
  </Landing>
</template>


<static-query>
query {
  metadata {
    siteName
  },
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
    },

    topics: allTopic{
    edges{
     node{
      id
      name
      description
      thumbnail
    } 
    }
  },
  posts: allPost(sortBy: "date", order: DESC, limit:3){
     edges{
       node{
         id
         title
         abstract
         date (format: "DD/MM/YYYY")
        #  thumbnail
         thumbnail
         path
       }
     }
   }
}
</static-query>

<script>
import Slogan from '~/components/Landing/Slogan.vue'
import Presentation from '~/components/Landing/Presentation.vue'
import PresentationSmall from '~/components/Landing/PresentationSmall.vue'
import IntroInfo from '~/components/Landing/IntroInfo.vue'
import IntroPic from '~/components/Landing/IntroPic.vue'
import ArtInfo from '~/components/Landing/ArtInfo.vue'

export default {
  components: {
    Slogan,
    Presentation,
    PresentationSmall,
    IntroInfo,
    IntroPic,
    ArtInfo,
  },
}
</script>

<style scoped>
</style>