<template>
  <section class=" w-screen h-128 relative flex justify-center items-center  bg-cover bg-no-repeat bg-center px-2 tablet:px-16 laptop:px-32 mb-12 tablet:mb-32" :style="{ backgroundImage: 'url(' + require('~/assets/images/menina_background.jpeg') + ')' }">

    <Title
      class=" w-full tablet:w-128 laptop:w-168 laptop:h-28"
      viewBox="-10 0 720 120"
    />
    <!-- <ArrowDown class="arrow-icon" width="24" height="24" viewBox="0 0 24 24" /> -->
  </section>
</template>

<script>
import Title from '~/assets/svg/Title.svg'
import ArrowDown from '~/assets/svg/ArrowDown.svg'
export default {
  components: { Title, ArrowDown },
}
</script>

<style scoped>
/*ANIMATION FOR TITLE*/
.svg-stroke {
  text-align: center;
  stroke: white;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 8s linear forwards, fill-opacity 2s linear forwards;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes fill-opacity {
  0% {
    fill-opacity: 0;
  }
  100% {
    fill-opacity: 1;
  }
}
/*TODO add prefixes*/

.arrow-icon {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: scale(2);
}
</style>
