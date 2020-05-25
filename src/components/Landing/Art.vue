<template>
  <section
    name="art-component"
    class="w-full h-full tablet:h-96 laptop:h-128 flex flex-col items-center py-8 my-16"
    :class="position ? 'tablet:flex-row' : 'tablet:flex-row-reverse'"
  >
    <!-- <div
      class="w-full tablet:w-1/2 h-full bg-cover bg-no-repeat bg-center border-8 border-gold transition duration-500 ease-in-out shadow-3xl tablet:shadow-3d-effect hover:shadow-md mb-6 tablet:mb-auto"
      :style="{ backgroundImage: 'url(' + topic.thumbnail + ')' }"
    ></div> -->
    <div
      class="w-full tablet:w-1/2 h-64 tablet:h-full border-8 border-gold transition duration-500 ease-in-out shadow-3xl tablet:shadow-3d-effect hover:shadow-md mb-6 tablet:mb-auto"
    >
      <g-image
        class="object-cover w-full h-full"
        :src="topic.thumbnail"
        width="500"
        height="400"
        :alt="topic.name"
      ></g-image>
    </div>
    <div
      class="w-full tablet:w-1/2 h-full flex flex-col items-center justify-center px-8"
    >
      <h1 class="font-titles uppercase text-secondary border-b border-olive">
        {{ topic.name }}
      </h1>

      <p class="py-8 text-center opacity-75 text-xl">{{ topic.description }}</p>
      <g-link
        to="/blog/"
        class="bg-secondary shadow-inner hover:bg-gold text-white py-3 px-2 font-titles"
        >Ir a los posts de {{ topic.name }}</g-link
      >
    </div>
  </section>
</template>

<script>
export default {
  props: ['topic', 'position'],
}
</script>

<style scoped></style>
