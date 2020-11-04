<template>
  <div :class="imgClass">
    <g-image :src="source" width="480" class="h-full w-full object-cover" />
  </div>
</template>

<script>
export default {
  props: ['imgClass', 'picture'],
  computed: {
    //detect browser to get images in the best format
    source: function() {
      if (process.isClient) {
        const isSafari =
          /constructor/i.test(window.HTMLElement) ||
          (function(p) {
            return p.toString() === '[object SafariRemoteNotification]'
          })(
            !window['safari'] ||
              (typeof safari !== 'undefined' && safari.pushNotification)
          )

        const format = isSafari ? 'jp2' : 'webp'
        return this.picture.replace(
          this.picture.substr(this.picture.lastIndexOf('.') + 1),
          format
        )
      }
      return ''
    },
  },
}
</script>

<style scoped></style>
