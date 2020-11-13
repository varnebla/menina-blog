<template>
  <div
    class="my-0 min-h-full max-w-full mx-auto overflow-hidden bg-background text-primary transition-all duration-300 ease-in-out flex flex-col"
    :class="theme"
  >
    <transition name="menina-nav-fade" appear>
      <Header v-on:toggleMenu="toggleMenu" class="flex-auto"/>
    </transition>
    <transition name="fade-backdrop">
      <Backdrop v-if="showMenu" :toggleMenu="toggleMenu" />
    </transition>
    <transition name="slide-menu">
      <DropdownMenu v-if="showMenu" :changeMode="changeMode" />
    </transition>
    <transition name="landing-fade" appear>
      <main class="flex-auto">
        <slot />
      </main>
    </transition>
    <Footer class="flex-auto"/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
  
}
</static-query>

<script>
import Vue from 'vue'
import Header from '~/components/Headers/Header.vue'
import ImageBanner from '~/components/Landing/ImageBanner.vue'
import Art from '~/components/Landing/Art.vue'
import ShowPosts from '~/components/Landing/ShowPosts.vue'
import Contact from '~/components/Landing/Contact.vue'
import Footer from '~/components/Footers/Footer.vue'
import DropdownMenu from '~/components/Headers/DropdownMenu.vue'
import Backdrop from '~/components/Headers/Backdrop.vue'

export default {
  components: {
    Header,
    ImageBanner,
    Art,
    ShowPosts,
    Contact,
    Footer,
    DropdownMenu,
    Backdrop
  },
  data: function() {
    return {
      theme: 'theme-light',
      showMenu: false,

    }
  },
  computed: {
    landingInfo: function() {
      return this.$page.landing.edges[0].node
    },
  },
  methods: {
    getOddOrEven(index) {
      return index % 2 == 0 // if true, number is even
    },
    changeMode: function(mode) {
      this.theme = mode
    },
    toggleMenu: function() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>

<style>
@font-face {
  font-display: swap;
}
.landing-fade-enter-active {
  transition: opacity 0.5s;
}
.landing-fade-enter,
.landing-fade-leave-to {
  opacity: 0;
}
.menina-nav-fade-enter-active {
  transition: all 2s;
}
.menina-nav-fade-enter,
.menina-nav-fade-leave-to {
  opacity: 0;
}
.art-appear {
  opacity: 1;
  transition: all 0.8s ease-in-out;
}
.blog-fade-enter-active {
  transition: opacity 0.5s;
}

.blog-fade-enter,
.blog-fade-leave-to {
  opacity: 0;
}
.blog-fade-leave-active {
  transform: translateX(5%);
  transition: transform 0.5s;
}
</style>
