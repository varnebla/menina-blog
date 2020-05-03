<template>
  <g-link class="w-full h-full" :to="post.path">
    <div
      class="w-full h-96 tablet:h-48 shadow-xl bg-white text-black flex flex-col tablet:flex-row p-4"
    >
      <div
        class="w-full tablet:w-1/3 h-full bg-cover bg-center"
        :style="{ 'background-image': 'url(' + post.thumbnail + ')' }"
      ></div>
      <div
        class="tablet:w-2/3 pt-5 tablet:pl-5 tablet:pt-0 flex flex-col justify-start"
      >
        <h2 class="font-sans text-3xl font-bold mb-2">{{ post.title }}</h2>
        <p class="font-serif text-lg opacity-50">{{ post.abstract }}</p>
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
