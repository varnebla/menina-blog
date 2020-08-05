<template>
  <div :class="imgClass">
    <g-image :src="source" class="h-full object-cover" />
  </div>
</template>

<script>
export default {
  props: ['imgClass', 'picture'],
  computed: {
    //detect browser to get images in the best format
    source: function() {
      const format = this.$browserDetect.isSafari ? 'jp2' : 'webp'
      return this.picture.replace(
        this.picture.substr(this.picture.lastIndexOf('.') + 1),
        format
      )
    },
  },
  mounted: function() {
    console.log(this.picture)
  },
}
</script>

<style scoped></style>
