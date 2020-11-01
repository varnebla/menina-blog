<template>
  <div
    class="bg-gold w-full h-auto shadow-3d-effect top-0 left-0 fixed z-50 flex flex-col px-4 py-4 text-background text-xl"
    name="menu-slide"
    key="menu-slide"
  >
    <g-link to="/" class="font-titles py-2">La menina perdida</g-link>
    <g-link class="py-2" to="/blog">Blog</g-link>
    <!-- <g-link class="py-2" to="/about/">Sobre mí</g-link> -->
    <!-- <ModeToggle class="py-2" iconColor="text-white" :changeMode="changeMode" /> -->
  </div>
</template>

<script>
export default {}
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
