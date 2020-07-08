<template>
  <Layout>
    <!-- <h1 class="mb-6">Sobre mí</h1> -->
    <h1 class="text-gold">Jennifer Arellano</h1>
    <h4 class="opacity-50 mb-10">Historiadora del arte, gestora cultural, community manager</h4>
    <div class="content" v-html="aboutText"></div>
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
