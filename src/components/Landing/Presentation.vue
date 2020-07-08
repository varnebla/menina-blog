<template>
  <section
    class="mb-12"
  >
  <div class="w-full h-142 mobileS:h-156 tablet:h-172 relative bg-cover bg-no-repeat bg-center  z-0"
    :style="{
      backgroundImage:
        'url(https://res.cloudinary.com/varnebla/image/upload/c_crop/v1590331682/WhatsApp_Image_2020-04-26_at_19.10.08_otgort.webp)', 'filter': 'brightness(60%)'
    }">

  </div>
  <transition name="menina-fade" appear>

    <div
      class="w-72 mobileS:w-80 tablet:w-96 h-112 mobileS:h-120 tablet:h-128 flex justify-center items-center border-4 border-white absolute z-10 top-0 left-0 mt-24 tablet:mt-32 ml-4 mobileS:ml-6 mobileL:ml-24 laptop:ml-32"
    >
      <div class="w-11/12 h-104 mobileS:h-112 tablet:h-120 border-2 border-white p-4">
        <h1
          data-cy="app_title"
          class="text-white leading-tight font-normal font-landing text-5xl mobileS:text-6xl text-right mb-4"
        >
          la menina perdida
        </h1>
        <h5
          data-cy="app_subtitle"
          class="text-white font-sans text-right font-thin uppercase mb-8"
        >
          Para que veas el arte con otros ojos
        </h5>
        <div class="flex justify-end" data-cy="links">
          <g-link
            class="border-2 border-white rounded-full p-2 hover:bg-white icon-transparent transition-all duration-200 ease-in-out"
            to="https://instagram.com/lameninaperdida"
            aria-label="Ir a instagram"
          >
            <Instagram
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class=" text-white transform scale-75"
              key="instagram"
              focusable="false"
            />
          </g-link>
          <g-link
            class="border-2 border-white rounded-full p-2 hover:bg-white icon-transparent transition-all duration-200 ease-in-out ml-2"
            to="https://twitter.com/lameninaperdida"
            aria-label="Ir a twitter"
          >
            <Twitter
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class=" text-white transform scale-75"
              key="twitter"
              focusable="false"
            />
          </g-link>
          <g-link
            class="border-2 border-white rounded-full p-2 hover:bg-white icon-transparent transition-all duration-200 ease-in-out ml-2"
            to="https://facebook.com/lameninaperdida"
            aria-label="Ir a facebook"
          >
            <Facebook
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class=" text-white transform scale-75"
              key="facebook"
              focusable="false"
            />
          </g-link>
          <g-link
            class="border-2 border-white rounded-full p-2 hover:bg-white icon-transparent transition-all duration-200 ease-in-out ml-2"
            to="https://linkedin.com/in/jenniferarellano-cm"
            aria-label="Ir a linkedin"
          >
            <Linkedin
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class=" text-white transform scale-75"
              key="linkedin"
              focusable="false"
            />
          </g-link>
        </div>
      </div>
    </div>
  </transition>
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
}
</script>

<style scoped>
.menina-fade-enter-active {
  transition: all 1s;
}

.menina-fade-enter,
.menina-fade-leave-to {
  transform: translateX(-30%);
  opacity: 0;
}
.icon-transparent > svg {
  fill: white;
  @apply transition-all duration-200 ease-in-out;
}
.icon-transparent:hover svg {
  fill: #242422;
  @apply transition-all duration-200 ease-in-out;
}
</style>
