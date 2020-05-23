<template>
  <div class="contact">
    <div v-html="contactText"></div>
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
.contact {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 60vh;
  margin: 0%;
  background-color: white;
}
.title {
  color: darkslategrey;
}
</style>
