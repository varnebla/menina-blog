<template>
  <section class="w-screen h-128 flex justify-between items-center px-2 tablet:px-16 laptop:px-32">
    <slot name="left-component"></slot>
    <slot name="right-component"></slot>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.art {
  background-color: rebeccapurple;
}
.title {
  color: white;
}
</style>
