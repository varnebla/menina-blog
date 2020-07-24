<template>

  <transition name="menina-fade" appear>

  <div
      class="w-72 mobileS:w-80 tablet:w-96 h-112 mobileS:h-120 tablet:h-128 flex justify-center items-center border-4 border-primary absolute z-10 top-0 mt-24 tablet:mt-32  ml-4 mobileS:ml-6 mobileL:ml-16 laptop:ml-24"
    >
    <!-- ml-4 mobileS:ml-6 mobileL:ml-20 laptop:ml-24 -->

        <!-- <h1
          data-cy="app_title"
          class="text-primary leading-tight font-normal font-landing text-5xl mobileS:text-6xl text-right mb-4"
        >
          la menina perdida
        </h1> -->
        <h2
          data-cy="app_subtitle"
          class="text-primary font-sans text-right font-thin mb-8"
        >
          Para que veas el arte con otros ojos
        </h2>
        <!-- <Menina
              viewBox="0 0 1016.74 793.49"
              width="1016"
              height="793"
              class=" text-primary transform"
              key="twitter"
              focusable="false"
            /> -->
        <div class="flex justify-end" data-cy="links">
          <g-link
            class="border-2 border-primary rounded-full p-2 hover:bg-primary icon-transparent transition-all duration-200 ease-in-out"
            to="https://instagram.com/lameninaperdida"
            aria-label="Ir a instagram"
          >
            <Instagram
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class=" text-primary transform scale-75"
              key="instagram"
              focusable="false"
            />
          </g-link>
          <g-link
            class="border-2 border-primary rounded-full p-2 hover:bg-primary icon-transparent transition-all duration-200 ease-in-out ml-2"
            to="https://twitter.com/lameninaperdida"
            aria-label="Ir a twitter"
          >
            <Twitter
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class=" text-primary transform scale-75"
              key="twitter"
              focusable="false"
            />
          </g-link>
          <g-link
            class="border-2 border-primary rounded-full p-2 hover:bg-primary icon-transparent transition-all duration-200 ease-in-out ml-2"
            to="https://facebook.com/lameninaperdida"
            aria-label="Ir a facebook"
          >
            <Facebook
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class=" text-primary transform scale-75"
              key="facebook"
              focusable="false"
            />
          </g-link>
          <g-link
            class="border-2 border-primary rounded-full p-2 hover:bg-primary icon-transparent transition-all duration-200 ease-in-out ml-2"
            to="https://linkedin.com/in/jenniferarellano-cm"
            aria-label="Ir a linkedin"
          >
            <Linkedin
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class=" text-primary transform scale-75"
              key="linkedin"
              focusable="false"
            />
          </g-link>
        </div>
    </div>
  </transition>

</template>

<script>
import Instagram from '~/assets/svg/Instagram.svg'
import Twitter from '~/assets/svg/Twitter.svg'
import Facebook from '~/assets/svg/Facebook.svg'
import Linkedin from '~/assets/svg/Linkedin.svg'
import Menina from '~/assets/svg/Menina.svg'
export default {
  components: {
    Instagram,
    Twitter,
    Facebook,
    Linkedin,
    Menina,
  },
}
</script>

<style>
.menina-fade-enter-active {
  transition: all 1s;
}

.menina-fade-enter,
.menina-fade-leave-to {
  transform: translateX(-30%);
  opacity: 0;
}
.icon-transparent > svg {
  fill: var(--primary);
  @apply transition-all duration-200 ease-in-out;
}
.icon-transparent:hover svg {
  fill: var(--background);
  @apply transition-all duration-200 ease-in-out;
}
</style>