<template>
  <div
    class="w-full h-full top-0 left-0 bg-black bg-opacity-50 fixed z-40"
    @click="handleToggle"
    name="slide-backdrop"
  ></div>
</template>

<script>
export default {
  props: ['toggleMenu'],
  methods: {
    handleToggle: function(event) {
      event.target.getAttribute('name') === 'slide-backdrop' &&
        this.toggleMenu()
    },
  },
}
</script>

<style>
.fade-backdrop-enter-active,
.fade-backdrop-leave-active {
  transition: all 0.5s ease-in-out;
}
.fade-backdrop-enter,
.fade-backdrop-leave-to {
  opacity: 0;
}
</style>
