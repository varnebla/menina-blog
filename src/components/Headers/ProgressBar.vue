<template>
  <div class="fixed h-2 z-50 top-0 left-0 bg-gold" :style="{width: `${progress}%`}"></div>
</template>

<script>
export default {
  props: ['progress'],
}
</script>

<style scoped>
</style>