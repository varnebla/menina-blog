<template>
  <Landing>
    <section id="presentation" class="w-full h-142 mobileS:h-156 tablet:h-172 grid grid-cols-12 mb-32">
      <Slogan class="col-span-6"/>
      <Presentation class="hidden mobileL:inline col-start-9  laptop:col-start-8 desktop:col-start-6 col-span-4 laptop:col-span-5 desktop:col-span-5"/>
    </section>
    <section>
    </section>
    <section id="introduction" class="mb-32">
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
  }
  landing: allLanding{
      edges{
        node{
          slogan
          topics{
            name
            description
            thumbnail
          }
          contact
        }
      }
    }

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
import IntroInfo from '~/components/Landing/IntroInfo.vue'
import IntroPic from '~/components/Landing/IntroPic.vue'
import ArtInfo from '~/components/Landing/ArtInfo.vue'

export default {
  components: {
    Slogan,
    Presentation,
    IntroInfo,
    IntroPic,
    ArtInfo,
  },
}
</script>

<style scoped>
</style>