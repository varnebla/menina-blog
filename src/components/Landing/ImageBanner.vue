<template>
  <div :class="imgClass">
    <cld-image
      cloudName="varnebla"
      :public-id="picture"
      loading="lazy"
      dpr="auto"
      width="auto:breakpoints"
      responsive="fill"
    >
      <!-- <cld-placeholder width="auto:breakpoints" responsive="fill"></cld-placeholder> -->
    </cld-image>
  </div>
</template>

<script>
import { pictureFormat } from '~/helpers/helper-functions.js'
export default {
  props: ['imgClass', 'picture'],
  // computed: {
  //   //detect browser to get images in the best format
  //   source: function() {
  //     if (process.isClient) {
  //       this.picture.replace(
  //         this.picture.substr(this.picture.lastIndexOf('.') + 1),
  //         pictureFormat()
  //       )
  //     }
  //     console.log(this.picture, 'picture with format')
  //     return this.picture
  //   },
  // },
}
</script>

<style scoped></style>
