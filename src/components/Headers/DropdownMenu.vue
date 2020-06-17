<template>
  <div
    class="bg-secondary w-full h-40 shadow-3d-effect top-0 left-0 fixed z-50 flex flex-col px-4 py-4"
    name="menu-slide"
    key="menu-slide"
  >
    <g-link class="py-2 text-white" to="/blog">Blog</g-link>
    <g-link class="py-2 text-white" to="/about/">Sobre mí</g-link>
    <ModeToggle class="py-2" iconColor="text-white" :changeMode="changeMode" />
  </div>
</template>

<script>
import ModeToggle from '~/components/Headers/ModeToggle.vue'
export default {
  components: {
    ModeToggle,
  },
  props: ['changeMode'],
}
</script>

<style>
.slide-menu-enter-active,
.slide-menu-leave-active {
  transition: all 0.5s ease-in-out;
}
.slide-menu-enter,
.slide-menu-leave-to {
  transform: translateY(-100%);
}
</style>
