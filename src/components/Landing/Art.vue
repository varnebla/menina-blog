<template>
  <section class="w-screen h-128 flex items-center px-2 tablet:px-16 laptop:px-32"
  :class="position ? 'justify-start' : 'justify-end'">
    <div class="w-1/2 h-full bg-cover bg-no-repeat bg-center" :style="{ backgroundImage: 'url(' + topic.thumbnail + ')'}">
    </div>
    <div class="w-1/2">
      <h3>{{topic.name}}</h3>
      <p>{{topic.description}}</p>
      <g-link to="/blog/">Blog</g-link>
    </div>
    <slot name="right-component"></slot>
  </section>
</template>

<script>
export default {
  props: ['topic', 'position'],
  mounted: function() {
    console.log(this.topic.name, this.position)
  },
}
</script>

<style scoped>
</style>
