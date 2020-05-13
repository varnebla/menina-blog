<template>
  <Landing>
    <Presentation />
    <Art
      v-for="(edge, index) in $page.topics.edges"
      :topic="edge.node"
      :key="edge.node.id"
      :position="getOddOrEven(index)"
    />
    <div
      class="grid grid-cols-1 laptop:grid-cols-3 gap-8 w-full px-2 tablet:px-32 laptop:px-32 py-8"
    >
      <ShowPosts
        v-for="edge in $page.posts.edges"
        :post="edge.node"
        :key="edge.node.id"
      />
    </div>
    <Contact />
  </Landing>
</template>

<page-query>
  query{
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
    console.log(this.$page.topics.edges)
  },
  methods: {
    getOddOrEven(index) {
      return index % 2 == 0 // if true, number is even
    },
  },
}
</script>

<style></style>
