<template>
  <section
    data-cy="art-component"
    class="w-full h-full grid grid-cols-1 tablet:grid-cols-2 py-8"
  >
    <div
      class="w-full  h-48 tablet:h-full p-6 tablet:mb-auto"
      :class="odd ? 'tablet:order-2' : 'tablet:order-1'"
    >
      <g-image
        class="object-cover w-full h-full"
        :src="option.image"
        alt="arte"
      ></g-image>
    </div>
    <div
      class="w-full h-full p-6 flex flex-col items-start justify-start"
     :class="!odd ? 'tablet:order-2' : 'tablet:order-1'"
    >
      <h4
        class="text-left font-titles mb-3"
      >
        {{option.title}}
      </h4>

      <p class="text-left pb-4">
        {{option.content}}
      </p>
      <g-link
        to="/blog/"
        class="border border-primary uppercase py-3 px-2 text-base"
        >Ir a los posts de arte &#8594;</g-link
      >
    </div>
  </section>
</template>

<script>
export default {
  props: ['option', 'odd'],
}
</script>

<style scoped></style>
