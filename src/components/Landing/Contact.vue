<template>
  <div
    class="w-full px-2 tablet:px-16 laptop:px-32 landscape:px-96 my-32 flex justify-center items-center"
  >
    <div class="w-full tablet:w-8/12">
      <div v-html="contactText" class="p-8 shadow shadow-lg"></div>
    </div>
  </div>
</template>

<script>
import { Remarkable } from 'remarkable'
export default {
  props: ['contact'],
  computed: {
    contactText: function() {
      var md = new Remarkable()
      return md.render(this.contact)
    },
  },
}
</script>

<style scoped>
.contact-paragraph > p {
  @apply p-8 bg-red-100;
}
</style>
