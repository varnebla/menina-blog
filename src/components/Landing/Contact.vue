<template>
  <div
    class="w-full px-2 tablet:px-16 laptop:px-32 landscape:px-96 my-24 flex justify-center items-center"
  >
    <div class="w-full laptop:w-8/12">
      <div
        v-html="contactText"
        class="p-8 border-8 border-secondary dark:border-gold bg-cream dark:bg-dark text-xl shadow-3d-effect opacity-75 contact"
      ></div>
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

<style>
.contact > p > a {
  @apply underline text-gold;
}
</style>
