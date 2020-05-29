<template>
  <div class="w-full">
    <!-- <div
      class="w-full h-56 bg-cover bg-no-repeat bg-center"
      :style="{ backgroundImage: 'url(' + post.thumbnail + ')' }"
    ></div> -->
    <div class="w-full h-56">
      <g-image
        class="object-cover w-full h-full"
        :src="post.thumbnail"
        :alt="post.title"
      ></g-image>
    </div>
    <div class="py-3 flex flex-col justify-start">
      <g-link :to="post.path"
        ><h4
          class="font-titles leading-tight font-bold hover:text-secondary transition-colors duration-200 ease-in-out mb-2"
        >
          {{ post.title }}
        </h4></g-link
      >
      <p class="opacity-50 mb-4">{{ post.date }}</p>
      <p class="text-base opacity-75">{{ post.abstract }}</p>
      <g-link
        class="text-secondary dark:text-gold hover:text-gold transition-colors duration-200 ease-in-out mt-4"
        :to="post.path"
        >Seguir leyendo</g-link
      >
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
