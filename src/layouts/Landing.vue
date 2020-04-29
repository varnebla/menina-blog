<template>
  <div class="container mx-0 box-border">
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
  perspective: 8px;
  perspective-origin: 0%;
}
</style>
