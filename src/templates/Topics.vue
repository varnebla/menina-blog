<template>
  <div>
    <h1>Topics</h1>
    <ul>
      <li></li>
    </ul>
  </div>
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
  export default {
    
  }
</script>

<style scoped>

</style>