<template>
  <Landing>
    <section id="presentation" class="w-full h-142 mobileS:h-156 tablet:h-172 grid grid-cols-12 mb-32">
      <Slogan class="col-span-6"/>
      <Presentation class="hidden mobileL:inline col-start-9  laptop:col-start-8 desktop:col-start-6 col-span-4 laptop:col-span-5 desktop:col-span-5"/>
    </section>
    <section>
    </section>
    <section id="introduction" class="mb-32">
      <SectionTitle class="mb-12"/>
      <IntroPic/>
    </section>
    <section>
      <h3 class="text-center">Arte y cultura</h3>
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
import SectionTitle from '~/components/Landing/SectionTitle.vue'
import IntroPic from '~/components/Landing/IntroPic.vue'

export default {
  components: {
    Slogan,
    Presentation,
    SectionTitle,
    IntroPic,
  },
}
</script>

<style scoped>
</style>