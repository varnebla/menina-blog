<template>
  <nav class="z-50 right-0 text-primary p-12 flex justify-between">
    <g-link to="/" class="font-titles">La menina perdida</g-link>
    <div class="flex justify-end">
      <g-link class="ml-5 hidden laptop:inline" to="/blog">Blog</g-link>
      <g-link class="ml-5 hidden laptop:inline" to="/about/">Sobre mí</g-link>
      <MenuThin viewBox="0 0 24 24"
              width="24"
              height="24"
              class=" text-primary inline laptop:hidden"
              key="instagram"
              focusable="false"
              @click="handleMenu"/>
    </div>
  </nav>
</template>

<script>
import MenuThin from '~/assets/svg/MenuThin.svg'
export default {
  components: {
    MenuThin,
  },
  methods: {
    handleMenu() {
      this.$emit('toggleMenu')
    },
  },
}
</script>

<style scoped>
</style>