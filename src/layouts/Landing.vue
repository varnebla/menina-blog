<template>
  <div class="my-0 max-w-full mx-auto overflow-hidden">
    <slot />
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

<style scoped></style>
