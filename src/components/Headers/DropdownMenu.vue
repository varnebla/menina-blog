<template>
  <div class="w-full h-full top-0 left-0 bg-black bg-opacity-50 fixed z-40" @click="handleToggle" name="slide-backdrop">
  <transition name="slide">
  <div class="bg-secondary w-full h-40 shadow-3d-effect top-0 left-0 fixed z-50 flex flex-col px-4 py-4" key="menu-slide" >
    <g-link class="py-2 text-white" to="/blog">Blog</g-link>
    <g-link class="py-2 text-white" to="/about/">Sobre mí</g-link>
    <ModeToggle class="py-2" iconColor="text-white" :changeMode="changeMode" />
  </div>

  </transition>
  </div>
</template>

<script>
import ModeToggle from '~/components/Headers/ModeToggle.vue'
export default {
  components: {
    ModeToggle,
  },
  props: ['toggleMenu', 'changeMode'],
  methods: {
    handleToggle: function(event) {
      event.target.getAttribute('name') === 'slide-backdrop' &&
        this.toggleMenu()
    },
  },
}
</script>

<style>
.slide-enter-active,
.slide-enter-active {
  transition: all 0.3s ease-in-out;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(0px);
}
</style>