<template>
  <div class="w-full h-full">
    <div class="my-12 flex flex-col tablet:flex-row py-2 post-card">
      <g-link class="w-full tablet:w-1/3" :to="post.path">
        <g-image
          class="object-cover w-full h-56"
          :src="post.thumbnail"
          :alt="post.title"
        >
        </g-image>
      </g-link>
      <div
        class="tablet:w-2/3 tablet:pl-5 tablet:pt-0 flex flex-col justify-start"
      >
        <g-link :to="post.path">
          <h3
            class="font-titles mb-2 hover:text-secondary transition-all duration-200 ease-in-out"
          >
            {{ post.title }}
          </h3>
        </g-link>
        <p class="opacity-50 mb-4">Publicado el {{ post.date }}</p>
        <p class="text-base opacity-75 abstract-paragraph">
          {{ post.abstract }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],
}
</script>

<style>
/*3 lines of paragraph */
.abstract-paragraph {
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* .post-card h3 {
  @apply transition-all scale-x-0 duration-300 ease-linear;
}
.post-card:hover h3 {
  @apply bg-gold text-white scale-x-100;
} */
</style>
