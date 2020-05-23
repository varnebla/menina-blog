<template>
  <Layout>
    <h1 class="font-titles">Sobre mí</h1>
    <p v-html="aboutText"></p>
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
import { Remarkable } from 'remarkable'
export default {
  metaInfo: {
    title: 'About us',
  },
  computed: {
    aboutText: function() {
      var md = new Remarkable()
      return md.render(this.$page.about.edges[0].node.about_content)
    },
  },
}
</script>
