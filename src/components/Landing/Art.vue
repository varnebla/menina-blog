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
        class="border border-primary hover:border-gold text-primary hover:text-gold transition duration-200 ease-in-out uppercase py-3 px-6 text-base btn-blog flex justify-around"
        ><div class="mr-2">Ir a los posts de arte</div> <div class="arrow">&#8594;</div></g-link>
    </div>
  </section>
</template>

<script>
export default {
  props: ['option', 'odd'],
}
</script>

<style>
.arrow {
  transition: all 0.2s ease-in-out;
}

.btn-blog:hover .arrow {
  transform: translateX(10px);
  color: var(--gold);
}
</style>
