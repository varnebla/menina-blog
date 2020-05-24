<template>
  <div class="w-full">
    <div
      class="w-full h-56 bg-cover bg-no-repeat bg-center"
      :style="{ backgroundImage: 'url(' + post.thumbnail + ')' }"
    ></div>
    <div class="p-3 flex flex-col justify-start">
      <h4 class="font-titles leading-tight font-bold mb-2">{{ post.title }}</h4>
      <p class="opacity-50 mb-4">{{ post.date }}</p>
      <p class="text-base opacity-75">{{ post.abstract }}</p>
      <g-link class="text-olive mt-4" :to="post.path">Seguir leyendo</g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],
}
</script>

<style scoped>
.show-posts {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 60vh;
  margin: 0%;
  background-color: white;
}
.title {
  color: darkgoldenrod;
}
</style>
