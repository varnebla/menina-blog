<template>
  <Layout>
    <PostCard
      v-for="edge in $page.posts.edges"
      key="edge.node.title"
      :post="edge.node"
    />
  </Layout>
</template>

<page-query> 
 query{
   posts: allPost{
     edges{
       node{
         title
         abstract
         date
        #  thumbnail
         thumbnail (width: 50, height: 50, quality: 90)
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
