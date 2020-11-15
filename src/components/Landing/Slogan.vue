<template>

  <transition name="menina-fade" appear>

  <div
      class="flex flex-col justify-center items-end"
    >
        <h1
          data-cy="app_title"
          class="laptop:w-2/3 desktop:1/2 text-primary leading-tight font-normal font-landing text-6xl text-right mb-4"
        >
          la menina perdida
        </h1>
        <h2
          class="laptop:w-2/3 desktop:1/2 text-primary font-sans text-right font-thin mb-8 text-3xl"
        >
          Para que veas el <i>arte</i> con otros ojos
        </h2>
        
        <div class="flex justify-end" data-cy="links">
          <g-link
            class="border-2 border-primary rounded-full p-2 text-primary bg-background hover:bg-primary hover:text-background transition-all duration-200 ease-in-out"
            to="https://instagram.com/lameninaperdida"
            aria-label="Ir a instagram"
            title="Ir a instagram"
          >
            <Instagram
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class=" fill-current transform scale-75"
              key="instagram"
              focusable="false"
            />
          </g-link>
          <g-link
            class="border-2 border-primary rounded-full p-2 text-primary bg-background hover:bg-primary hover:text-background transition-all duration-200 ease-in-out ml-2"
            to="https://twitter.com/lameninaperdida"
            aria-label="Ir a twitter"
            title="Ir a twitter"
          >
            <Twitter
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class=" fill-current transform scale-75"
              key="twitter"
              focusable="false"
            />
          </g-link>
          <g-link
            class="border-2 border-primary rounded-full p-2 text-primary bg-background hover:bg-primary hover:text-background transition-all duration-200 ease-in-out ml-2"
            to="https://facebook.com/lameninaperdida"
            aria-label="Ir a facebook"
            title="Ir a facebook"
          >
            <Facebook
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class="fill-current transform scale-75"
              key="facebook"
              focusable="false"
            />
          </g-link>
          <!-- <g-link
            class="border-2 border-primary rounded-full p-2 text-primary bg-background hover:bg-primary hover:text-background transition-all duration-200 ease-in-out ml-2"
            to="https://linkedin.com/in/jenniferarellano-cm"
            aria-label="Ir a linkedin"
            title="Ir a linkedin"
          >
            <Linkedin
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class="fill-current transform scale-75"
              key="linkedin"
              focusable="false"
            />
          </g-link> -->
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
</style>