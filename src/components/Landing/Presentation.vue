<template>
  <div :class="imgClass">
    <g-image :src="source" class="h-full w-full object-cover" />
  </div>
</template>

<script>
import { pictureFormat } from '~/helpers/helper-functions.js'
export default {
  props: ['imgClass', 'picture'],
  computed: {
    //detect browser to get images in the best format
    source: function() {
      if (process.isClient) {
        return this.picture.replace(
          this.picture.substr(this.picture.lastIndexOf('.') + 1),
          pictureFormat()
        )
      }
      return ''
    },
  },
}
</script>

<style scoped></style>
