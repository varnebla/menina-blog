<template>
  <div
    class="my-0 max-w-full mx-auto overflow-hidden bg-background text-primary transition-all duration-300 ease-in-out"
    :class="theme"
  >
    <nav class="absolute z-50 right-0 text-white flex justify-end m-12">
      <ModeToggle iconColor="text-white" :changeMode="changeMode" />
      <g-link class="ml-5" to="/blog">Blog</g-link>
      <g-link class="ml-5" to="/about/">Sobre mí</g-link>
    </nav>

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
    <h2
      class="text-secondary w-full px-2 tablet:px-16 laptop:px-32 landscape:px-96"
    >
      Últimos posts
    </h2>
    <div
      class="grid grid-cols-1 laptop:grid-cols-3 gap-8 w-full px-2 tablet:px-16 laptop:px-32 landscape:px-96 py-8"
    >
      <ShowPosts
        v-for="edge in $page.posts.edges"
        :post="edge.node"
        :key="edge.node.id"
      />
    </div>
    <Contact :contact="landingInfo.contact" />
    <Footer />
  </div>
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
import Presentation from '~/components/Landing/Presentation.vue'
import Art from '~/components/Landing/Art.vue'
import ShowPosts from '~/components/Landing/ShowPosts.vue'
import Contact from '~/components/Landing/Contact.vue'
import Footer from '~/components/Footers/Footer.vue'
import ModeToggle from '~/components/Headers/ModeToggle.vue'

export default {
  components: {
    Presentation,
    Art,
    ShowPosts,
    Contact,
    Footer,
    ModeToggle,
  },
  created: function() {
    !localStorage.getItem('theme') &&
      localStorage.setItem('theme', 'theme-light')
  },
  data: function() {
    return {
      theme: localStorage.getItem('theme'),
    }
  },
  computed: {
    landingInfo: function() {
      return this.$page.landing.edges[0].node
    },
  },
  methods: {
    getOddOrEven(index) {
      return index % 2 == 0 // if true, number is even
    },
    changeMode: function(mode) {
      this.theme = mode
    },
  },
}
</script>

<style scoped></style>
