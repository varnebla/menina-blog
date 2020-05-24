<template>
  <Landing>
    <Presentation />
    <div class="px-2 tablet:px-16 laptop:px-32 landscape:px-96">
      <Art
        v-for="(edge, index) in $page.landing.edges[0].node.topics"
        :topic="edge"
        :key="edge.name"
        :position="getOddOrEven(index)"
        class="max-w-screen-xl"
      />
    </div>
    <div
      class="grid grid-cols-1 laptop:grid-cols-3 gap-8 w-full px-2 tablet:px-16 laptop:px-32 landscape:px-96 py-8 mt-12 tablet:mt-16"
    >
      <ShowPosts
        v-for="edge in $page.posts.edges"
        :post="edge.node"
        :key="edge.node.id"
      />
    </div>
    <Contact :contact="landingInfo.contact" />
  </Landing>
</template>

<page-query>
  query{
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
</page-query>

<script>
import Presentation from '~/components/Landing/Presentation.vue'
import Art from '~/components/Landing/Art.vue'
import Music from '~/components/Landing/Music.vue'
import Phrase from '~/components/Landing/Phrase.vue'
import ShowPosts from '~/components/Landing/ShowPosts.vue'
import Contact from '~/components/Landing/Contact.vue'

export default {
  components: {
    Presentation,
    Art,
    Music,
    Phrase,
    ShowPosts,
    Contact,
  },
  metaInfo: {
    title: '',
  },
  mounted: function() {
    console.log(this.$page.landing.edges[0].node)
  },
  methods: {
    getOddOrEven(index) {
      return index % 2 == 0 // if true, number is even
    },
  },
  computed: {
    landingInfo: function() {
      return this.$page.landing.edges[0].node
    },
  },
}
</script>

<style></style>
