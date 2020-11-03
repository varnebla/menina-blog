<template>
  <Landing>
    <div class="h-full max-w-3xl mx-auto px-3 tablet:px-8 laptop:px-0">

    <PostCard
      v-for="edge in $page.posts.edges"
      :key="edge.node.title"
      :post="edge.node"
    />
    <Pager :info="$page.posts.pageInfo" :showLinks="true" :showNavigation="true" class="pager bottom-0 pb-8 text-xl text-center w-full flex justify-center" prevLabel="←" nextLabel="→" :range="2" linkClass="px-3"/>
    </div>
  </Landing>
</template>

<page-query> 
 query ($page:Int){
   posts: allPost(perPage:5, page:$page, sortBy: "date", order: DESC)@paginate {
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
.pager .active {
  @apply text-gold underline;
}
</style>
