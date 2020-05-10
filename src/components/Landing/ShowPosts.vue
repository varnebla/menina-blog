<template>
  <div class="w-1/4 h-96 shadow-lg bg-white">
    <div
      class="w-full  h-48 bg-cover bg-no-repeat bg-center"
      :style="{ backgroundImage: 'url(' + post.thumbnail + ')' }"
    ></div>
    <div class="p-3 flex flex-col justify-between h-full">
      <h3 class="font-serif leading-tight font-bold mb-2">{{ post.title }}</h3>
      <p>{{ post.abstract }}</p>
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
