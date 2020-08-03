<template>  
  <div :class="imgClass">
    <g-image :src="picture" class="h-full object-cover"/>
  </div>
</template>

<script>
export default {
  props: ['imgClass', 'picture'],
}
</script>

<style scoped>
</style>
