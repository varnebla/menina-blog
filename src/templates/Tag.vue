<template>
  <div>
    <h1>Posts de {{tagInfo.id}}</h1>
  </div>
</template>
<page-query>
query Tag($id:ID!){
   tag(id: $id){
     id
     belongsTo(filter: { typeName: { eq: Post } }) {
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
  export default {
    computed:{
      tagInfo() {
        return this.$page.tag
      },
      tagPosts(){
        return this.$page.tag.belongsTo.edges
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>