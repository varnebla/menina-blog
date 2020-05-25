<template>
  <Layout>
    <PostCard
      v-for="edge in $page.posts.edges"
      :key="edge.node.title"
      :post="edge.node"
    />
  </Layout>
</template>

<page-query> 
 query{
   posts: allPost(sortBy: "date", order: DESC){
     edges{
       node{
         title
         abstract
         date(format: "DD/MM/YYYY")
        #  thumbnail
         thumbnail
         path
       }
     }
   }
 }
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'
export default {
  metaInfo: {
    title: 'Blog',
  },
  components: {
    PostCard,
  },
}
</script>
