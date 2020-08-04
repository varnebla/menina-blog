<template>

  <div
    class="my-0 max-w-full mx-auto overflow-hidden bg-background text-primary transition-all duration-300 ease-in-out"
    :class="theme"
  >
  <transition name="menina-nav-fade" appear>
    <Header v-on:toggleMenu="toggleMenu"/>
  </transition>
  <transition name="fade-backdrop">
    <Backdrop v-if="showMenu" :toggleMenu="toggleMenu" />
  </transition>
  <transition name="slide-menu">
    <DropdownMenu v-if="showMenu" :changeMode="changeMode" />
  </transition>
  <transition name="landing-fade" appear>
    <main>
      <slot />
    </main>
  </transition>
  <!-- <transition name="landing-fade" appear>
    </transition>
    <Presentation data-type="presentation" />
    <div data-type="art" class="px-2 tablet:px-16 laptop:px-32 landscape:px-96 opacity-0">
      <Art
        v-for="(edge, index) in $page.landing.edges[0].node.topics"
        :topic="edge"
        :key="edge.name"
        :position="getOddOrEven(index)"
        class="max-w-screen-xl"
      />
    </div>
    <div data-type="posts" class="opacity-0">
    <h2
      class="text-secondary w-full px-2 tablet:px-16 laptop:px-32 landscape:px-96"
    >
      Últimos posts
    </h2>
    <div
      class="grid grid-cols-1 laptop:grid-cols-3 gap-8 w-full px-2 tablet:px-16 laptop:px-32 landscape:px-96 py-8"     
    >
      <ShowPosts
        v-for="edge in $page.posts.edges"
        :post="edge.node"
        :key="edge.node.id"
      />
    </div>
    </div>
    <Contact :contact="landingInfo.contact" /> -->
    <Footer />
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
import Presentation from '~/components/Landing/Presentation.vue'
import Art from '~/components/Landing/Art.vue'
import ShowPosts from '~/components/Landing/ShowPosts.vue'
import Contact from '~/components/Landing/Contact.vue'
import Footer from '~/components/Footers/Footer.vue'
import DropdownMenu from '~/components/Headers/DropdownMenu.vue'
import Backdrop from '~/components/Headers/Backdrop.vue'

export default {
  components: {
    Header,
    Presentation,
    Art,
    ShowPosts,
    Contact,
    Footer,
    DropdownMenu,
    Backdrop,
    // ModeToggle,
  },
  data: function () {
    return {
      // theme: this.$cookies.get('theme') || 'theme-light',
      theme: 'theme-light',
      showMenu: false,
      // presentationObserver: null,
      // presentationIntersected: false,
      // postsObserver: null,
      // postsIntersected: false,
      // artsObserver: null,
      // artsIntersected: false,
    }
  },
  computed: {
    landingInfo: function () {
      return this.$page.landing.edges[0].node
    },
  },
  // mounted: function() {
  //   this.theme =
  //     (localStorage && localStorage.getItem('theme')) || 'theme-light'
  // },
  // mounted: function () {
  //   //we need a function for each intersection observer
  //   const posts = document.querySelector('[data-type="posts"]')
  //   const arts = document.querySelector('[data-type="art"]')
  //   this.postsObserver = new IntersectionObserver((entries) => {
  //     const post = entries[0]
  //     if (post.isIntersecting) {
  //       posts.classList.add('art-appear')
  //       this.postsIntersected = true
  //       this.postsObserver.disconnect()
  //     }
  //   })
  //   this.artsObserver = new IntersectionObserver((entries) => {
  //     const art = entries[0]
  //     if (art.isIntersecting) {
  //       arts.classList.add('art-appear')
  //       this.artsIntersected = true
  //       this.artsObserver.disconnect()
  //     }
  //   })
  //   this.postsObserver.observe(posts)
  //   this.artsObserver.observe(arts)
  // },
  // destroyed: function () {
  //   this.postsObserver.disconnect()
  //   this.artsObserver.disconnect()
  // },
  methods: {
    getOddOrEven(index) {
      return index % 2 == 0 // if true, number is even
    },
    changeMode: function (mode) {
      this.theme = mode
    },
    toggleMenu: function () {
      this.showMenu = !this.showMenu
    },
  },
}
</script>

<style>
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
