<template>
  <div>
    <h1>Posts de {{topicInfo.id}}</h1>
    <ul>
      <li v-for="item in topicPosts">{{item.node.title}}</li>
    </ul>
  </div>
</template>
<page-query>
  query Topic($id:ID!){
   topic (id: $id){
     id
     belongsTo(sortBy: "date", order: DESC) {
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
  export default {
    computed:{
      topicInfo() {
        return this.$page.topic
      },
      topicPosts(){
        return this.$page.topic.belongsTo.edges
      }
    }
  }
</script>

<style scoped>

</style>