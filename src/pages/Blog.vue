<template>
  <Layout>

    <PostCard
      v-for="edge in $page.posts.edges"
      :key="edge.node.title"
      :post="edge.node"
    />
    <Pager :info="$page.posts.pageInfo" :showLinks="true" :showNavigation="true" class="text-2xl font-bold text-center w-full flex justify-around active:text-gold" prevLabel="<Anterior"nextLabel="Siguiente>"/>
  </Layout>
</template>

<page-query> 
 query ($page:Int){
   posts: allPost(perPage:1, page:$page, sortBy: "date", order: DESC)@paginate {
     pageInfo{
       totalPages
       currentPage
     }
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
import { Pager } from 'gridsome'
export default {
  metaInfo: {
    title: 'Blog',
  },
  components: {
    PostCard,
    Pager,
  },
}
</script>

<style>
</style>
