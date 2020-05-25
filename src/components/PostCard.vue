<template>
  <g-link class="w-full h-full" :to="post.path">
    <div
      class="my-12 bg-white text-black flex flex-col tablet:flex-row py-4 py-2"
    >
      <!-- <div
        class="w-full tablet:w-1/3 h-full bg-cover bg-center"
        :style="{ 'background-image': 'url(' + post.thumbnail + ')' }"
      ></div> -->
      <div class="w-full tablet:w-1/3">
        <g-image
          class="object-cover w-full h-full"
          :src="post.thumbnail"
          :alt="post.title"
        ></g-image>
      </div>
      <!-- <g-image class="w-full tablet:w-1/3" :src="post.thumbnail" fit="outside"/> -->
      <div
        class="tablet:w-2/3 tablet:pl-5 tablet:pt-0 flex flex-col justify-start"
      >
        <h3 class="font-titles mb-2">{{ post.title }}</h3>
        <p class="opacity-50 mb-4">Publicado el {{ post.date }}</p>
        <p class="font-serif text-base opacity-75">{{ post.abstract }}</p>
      </div>
    </div>
  </g-link>
</template>

<script>
export default {
  props: ['post'],
}
</script>

<style scoped></style>
