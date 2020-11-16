<template>
  <Landing>
    <h1 class="max-w-3xl mx-auto px-3 tablet:px-8 laptop:px-0">{{topicTitle}}</h1>
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
    metaInfo(){
      return{
        title: this.topicTitle
      }
    },
    components:{
      BlogList
    },
    computed:{
      topicInfo() {
        return this.$page.topic
      },
      topicPosts(){
        return this.$page.topic.belongsTo
      },
      topicTitle(){
        //first letter to uppercase
        return this.$page.topic.id.charAt(0).toUpperCase()+ this.$page.topic.id.slice(1)
      }
    }
  }
</script>

<style scoped>

</style>