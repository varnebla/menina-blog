<template>
  <div class="contact">
    <div v-html="contact"></div>
  </div>
</template>

<script>
export default {
  props: ['contact'],

  mounted: function() {
    console.log(this.contact, 'contact')
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
