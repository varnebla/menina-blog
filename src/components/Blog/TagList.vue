<template>
  <div class="flex justify-start"> 
    <g-link :to="`/blog/tag/${tag.title}`" v-for="tag in option" class="rounded-full bg-gray-400 py-1 px-3 mr-2 flex" :key="tag.title">
      #{{tag.title}}
    </g-link>
  </div>
</template>

<script>
  export default {
    props: ['option']
  }
</script>

<style lang="scss" scoped>

</style>