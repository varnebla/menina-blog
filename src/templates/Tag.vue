<template>
  <Landing>
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

<style lang="scss" scoped>

</style>