<template>
  <section
    class="w-screen h-140 tablet:h-96 laptop:h-128 flex flex-col items-center px-2 tablet:px-16 laptop:px-32 py-8"
    :class="position ? 'tablet:flex-row' : 'tablet:flex-row-reverse'"
  >
    <div
      class="w-full tablet:w-1/2 h-full bg-cover bg-no-repeat bg-center border-8 border-gold shadow-xl"
      :style="{ backgroundImage: 'url(' + topic.thumbnail + ')' }"
    ></div>
    <div
      class="w-full tablet:w-1/2 h-full flex flex-col items-center justify-center px-8"
    >
      <h1 class="font-titles uppercase text-secondary mb-3">
        {{ topic.name }}
      </h1>
      <p class="mb-3 text-center">{{ topic.description }}</p>
      <g-link to="/blog/" class="bg-secondary text-white py-3 px-2"
        >Ir a los posts de {{ topic.name }}</g-link
      >
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

<style scoped></style>
