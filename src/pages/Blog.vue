<template>
  <Layout>
    <h1 v-for="edge in $page.posts.edges" key="edge.node.title">
      {{ edge.node.title }}
    </h1>
  </Layout>
</template>

<page-query> 
 query{
   posts: allPosts{
     edges{
       node{
         title
       }
     }
   }
 }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Blog',
  },
}
</script>
