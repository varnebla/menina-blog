<template>
  <Landing>
    <BlogList :list="topicPosts"/>
  </Landing>
</template>
<page-query>
  query Topic($id:ID!, $page:Int){
   topic (id: $id){
     id
     belongsTo(sortBy: "date",perPage:5, page:$page, order: DESC)@paginate {
     pageInfo{
       totalPages
       currentPage
     }
      edges{
       node{
         ... on Post {
          title
          abstract
          date(format: "DD/MM/YYYY")
          #  thumbnail
          thumbnail
          path
          tags {
            title
          }
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
      topicInfo() {
        return this.$page.topic
      },
      topicPosts(){
        return this.$page.topic.belongsTo
      }
    }
  }
</script>

<style scoped>

</style>