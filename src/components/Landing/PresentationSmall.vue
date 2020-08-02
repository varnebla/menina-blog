<template>
  
  <div class="h-112 bg-cover bg-no-repeat bg-center z-0 bg-gold mx-2 mt-44"
    :style="{
      backgroundImage:
        `url(${picture})`
    }"
    >

  </div>
  <!-- <g-image src="~/assets/images/los-borrachos.jpg" width="500" class="w-full h-142 mobileS:h-156 tablet:h-172"/> -->

</template>

<script>
export default {
  props: ['picture'],
}
</script>

<style scoped>
</style>
