<template>
  <div class="landing">
    <slot></slot>
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Footer from '~/components/Footers/Footer.vue'
export default {
  components: {
    Footer,
  },
}
</script>

<style scoped>
.landing {
}
</style>
