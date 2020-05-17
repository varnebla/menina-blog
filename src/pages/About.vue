<template>
  <Layout>
    <h1 class="font-titles">About us</h1>
    <p v-html="$page.about.edges[0].node.about_content">
      <!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque
      omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum
      odit fugit assumenda rem dolores inventore iste reprehenderit maxime!
      Iusto. -->
    </p>
  </Layout>
</template>
<page-query>
  query About{
    about: allAbout{
      edges{
        node{
          about_content
        }
      }
    }
  }
</page-query>
<script>
export default {
  metaInfo: {
    title: 'About us',
  },
}
</script>
