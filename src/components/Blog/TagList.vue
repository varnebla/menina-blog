<template>
  <div class="flex justify-start"> 
    <g-link 
      v-for="tag in option" 
      :to="`${tag.path}`" 
      class="rounded-full bg-yellow-700  bg-opacity-25 hover:bg-opacity-50 text-primary transition-all duration-200 ease-in-out py-1 px-3 mr-2 flex" 
      :key="tag.title"
      :title="tag.title">
        {{tag.title}}
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