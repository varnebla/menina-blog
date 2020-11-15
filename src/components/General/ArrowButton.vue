<template>
  <g-link
    :to="path"
    class="border border-primary hover:border-gold text-primary hover:text-gold transition duration-200 ease-in-out uppercase py-3 px-6 text-base btn-blog flex justify-around" :title="text"
    >
      <div class="mr-2">{{text}}</div>
      <div class="arrow">&#8594;</div>
    </g-link>
</template>

<script>
  export default {
    props:['path', 'text'],
  }
</script>

<style scoped>
.arrow {
  transition: all 0.2s ease-in-out;
}
.btn-blog:hover .arrow{
  transform: translateX(10px);
  color: var(--gold);
}
</style>