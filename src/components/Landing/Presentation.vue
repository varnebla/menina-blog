<template>
  <section
    class="w-full h-screen relative flex justify-left items-center  bg-cover bg-no-repeat bg-center px-2 tablet:px-16 laptop:px-32 landscape:px-96 mb-12 tablet:mb-32"
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
          <g-link
            class="border-2 border-white rounded-full p-2 hover:bg-white icon-transparent transition-all duration-200 ease-in-out"
            to="https://instagram.com/lameninaperdida"
          >
            <Instagram
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class=" text-white transform scale-75"
              key="instagram"
            />
          </g-link>
          <g-link
            class="border-2 border-white rounded-full p-2 hover:bg-white icon-transparent transition-all duration-200 ease-in-out ml-2"
            to="https://twitter.com/lameninaperdida"
          >
            <Twitter
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class=" text-white transform scale-75"
              key="twitter"
            />
          </g-link>
          <g-link
            class="border-2 border-white rounded-full p-2 hover:bg-white icon-transparent transition-all duration-200 ease-in-out ml-2"
            to="https://facebook.com/lameninaperdida"
          >
            <Facebook
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class=" text-white transform scale-75"
              key="facebook"
            />
          </g-link>
          <g-link
            class="border-2 border-white rounded-full p-2 hover:bg-white icon-transparent transition-all duration-200 ease-in-out ml-2"
            to="https://linkedin.com/in/jenniferarellano-cm"
          >
            <Linkedin
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class=" text-white transform scale-75"
              key="linkedin"
            />
          </g-link>

          <!-- <Instagram
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="fill-current text-white transform scale-125 mr-6"
          /> -->
          <!-- <Twitter
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="fill-current text-white transform scale-150 ml-6"
          />
          <Facebook
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="fill-current text-white transform scale-150 ml-6"
          />
          <LinkedinEmpty
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="fill-current text-white transform scale-150 ml-6 mr-1"
          /> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Instagram from '~/assets/svg/Instagram.svg'
import Twitter from '~/assets/svg/Twitter.svg'
import Facebook from '~/assets/svg/Facebook.svg'
import Linkedin from '~/assets/svg/Linkedin.svg'
export default {
  components: {
    Instagram,
    Twitter,
    Facebook,
    Linkedin,
  },

  data: function() {
    return {
      instagram: 'instagram-empty',
    }
  },
  methods: {
    showInstaFull: function() {
      this.instagram = 'instagram-full'
    },
    hideInstaFull: function() {
      this.instagram = 'instagram-empty'
    },
  },
}
</script>

<style scoped>
.icon-transparent > svg {
  fill: white;
  @apply transition-all duration-200 ease-in-out;
}
.icon-transparent:hover svg {
  fill: #242422;
  @apply transition-all duration-200 ease-in-out;
}
</style>
