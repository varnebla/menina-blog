<template>
  <transition name="landing-fade">

  <div
    class="my-0 max-w-full mx-auto overflow-hidden bg-background text-primary transition-all duration-300 ease-in-out"
    :class="theme"
  >
    <transition name="menina-nav-fade" appear>
      <nav class="absolute z-50 right-0 text-white flex justify-end m-12">
        <ModeToggle iconColor="text-white" :changeMode="changeMode" />
        <g-link class="ml-5" to="/blog">Blog</g-link>
        <g-link class="ml-5" to="/about/">Sobre mí</g-link>
      </nav>
    </transition>

    <Presentation />
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
    <!-- </transition> -->
    <Contact :contact="landingInfo.contact" />
    <Footer />
  </div>
  </transition>
</template>

<static-query>
query {
  metadata {
    siteName
  }
  landing: allLanding{
      edges{
        node{
          slogan
          topics{
            name
            description
            thumbnail
          }
          contact
        }
      }
    }

    topics: allTopic{
    edges{
     node{
      id
      name
      description
      thumbnail
    } 
    }
  },
  posts: allPost(sortBy: "date", order: DESC, limit:3){
     edges{
       node{
         id
         title
         abstract
         date (format: "DD/MM/YYYY")
        #  thumbnail
         thumbnail
         path
       }
     }
   }
}
</static-query>

<script>
import Vue from 'vue'
import Presentation from '~/components/Landing/Presentation.vue'
import Art from '~/components/Landing/Art.vue'
import ShowPosts from '~/components/Landing/ShowPosts.vue'
import Contact from '~/components/Landing/Contact.vue'
import Footer from '~/components/Footers/Footer.vue'
import ModeToggle from '~/components/Headers/ModeToggle.vue'

export default {
  components: {
    Presentation,
    Art,
    ShowPosts,
    Contact,
    Footer,
    ModeToggle,
  },
  data: function() {
    return {
      // theme: this.$cookies.get('theme') || 'theme-light',
      theme: 'theme-light',
      postsObserver: null,
      postsIntersected: false,
      artsObserver: null,
      artsIntersected: false,
    }
  },
  computed: {
    landingInfo: function() {
      return this.$page.landing.edges[0].node
    },
  },
  // mounted: function() {
  //   this.theme =
  //     (localStorage && localStorage.getItem('theme')) || 'theme-light'
  // },
  mounted: function() {
    //we need a function for each intersection observer
    const posts = document.querySelector('[data-type="posts"]')
    const arts = document.querySelector('[data-type="art"]')
    this.postsObserver = new IntersectionObserver(entries => {
      const post = entries[0]
      if (post.isIntersecting) {
        posts.classList.add('art-appear')
        this.postsIntersected = true
        this.postsObserver.disconnect()
      }
    })
    this.artsObserver = new IntersectionObserver(entries => {
      const art = entries[0]
      if (art.isIntersecting) {
        arts.classList.add('art-appear')
        this.artsIntersected = true
        this.artsObserver.disconnect()
      }
    })
    this.postsObserver.observe(posts)
    this.artsObserver.observe(arts)
  },
  destroyed: function() {
    this.postsObserver.disconnect()
    this.artsObserver.disconnect()
  },
  methods: {
    getOddOrEven(index) {
      return index % 2 == 0 // if true, number is even
    },
    changeMode: function(mode) {
      this.theme = mode
    },
  },
}
</script>

<style scoped>
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
</style>
