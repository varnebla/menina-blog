<template>
  <Landing>
    <h1 class="max-w-3xl mx-auto px-3 tablet:px-8 laptop:px-0">Posts sobre {{tagInfo.id}}</h1>
    <BlogList :list="tagPosts"/>
  </Landing>
</template>
<page-query>
query Tag($id:ID!, $page:Int){
   tag(id: $id){
     id
     belongsTo(filter: { typeName: { eq: Post } },perPage:5, page:$page, sortBy: "date", order: DESC) @paginate {
     pageInfo{
       totalPages
       currentPage
     }
      edges{
       node{
         ...on Post {
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
   }
 }
</page-query>
<script>
  import BlogList from '~/components/Blog/BlogList.vue'
  export default {
    components:{
      BlogList
    },
    computed:{
      tagInfo() {
        return this.$page.tag
      },
      tagPosts(){
        return this.$page.tag.belongsTo
      }
    }
  }
</script>