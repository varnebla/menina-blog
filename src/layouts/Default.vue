<template>
  <div
    class="max-w-full my-0 mx-auto overflow-hidden flex flex-col justify-center items-center bg-background text-primary transition-all duration-300 ease-in-out"
    :class="theme"
  >
    <div class="w-full max-w-2xl p-3">
      <header class="header">
        <g-link to="/"
          ><h5 class="font-landing">
            {{ $static.metadata.siteName }}
          </h5></g-link
        >

        <nav class="flex">
          <ModeToggle :changeMode="changeMode" />
          <g-link class="ml-5" to="/blog">Blog</g-link>
          <g-link class="ml-5" to="/about/">Sobre mí</g-link>
        </nav>
      </header>
      <slot />
    </div>
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
import Footer from '~/components/Footers/Footer.vue'
import ModeToggle from '~/components/Headers/ModeToggle.vue'
export default {
  components: {
    Footer,
    ModeToggle,
  },
  data: function() {
    return {
      theme: (!!localStorage && localStorage.getItem('theme')) || 'theme-light',
    }
  },
  methods: {
    changeMode: function(mode) {
      this.theme = mode
    },
  },
}
</script>

<style>
body {
  /* font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif; */
  margin: 0;
  padding: 0;
  line-height: 1.5;
  box-sizing: border-box;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}
</style>
