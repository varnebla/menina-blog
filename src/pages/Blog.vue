<template>
  <Landing>
    <h1 class="max-w-3xl mx-auto px-3 tablet:px-8 laptop:px-0">Blog</h1>
    <BlogList :list="postList"/>
  </Landing>
</template>

<page-query> 
 query BlogPosts($page:Int){
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
import BlogList from '~/components/Blog/BlogList.vue'

export default {
  metaInfo: {
    title: 'Blog',
  },
  components: {
    BlogList
  },
  computed: {
    postList(){
      return this.$page.posts
    }
  }
}
</script>
