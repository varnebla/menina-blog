<template>
  <section
    class="w-full h-screen relative flex justify-left items-center  bg-cover bg-no-repeat bg-center px-2 tablet:px-16 laptop:px-32 mb-12 tablet:mb-32"
    :style="{
      backgroundImage:
        'url(' + require('~/assets/images/menina_background.jpeg') + ')',
    }"
  >
    <div
      class="w-96 h-128 flex justify-center items-center border-4 border-white"
    >
      <div class="w-11/12 h-120 border-2 border-white p-4">
        <h1
          class="text-white leading-tight font-normal font-landing text-6xl text-right mb-4"
        >
          la menina perdida
        </h1>
        <h5 class="text-white font-sans text-right font-thin uppercase mb-8">
          Para que veas el arte con otros ojos
        </h5>
        <div class="flex justify-end">
          <Instagram
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="fill-current text-white transform scale-125 mr-6"
          />
          <Twitter
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="fill-current text-white transform scale-125 mr-3"
          />
          <Facebook
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="fill-current text-white transform scale-125 mx-1"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Instagram from '~/assets/svg/Instagram.svg'
import Twitter from '~/assets/svg/Twitter.svg'
import Facebook from '~/assets/svg/Facebook.svg'
export default {
  components: { Instagram, Twitter, Facebook },
}
</script>

<style scoped></style>
