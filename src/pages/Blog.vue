<template>
  <Landing>
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
  // metaInfo: {
  //   title: 'Blog',
  //   meta: {
  //     key: 'description',
  //     name: 'description',
  //     content: 'Posts para que veas el arte con otros ojos'
  //   }
  // },
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
