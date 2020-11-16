<template>
  <footer class="pt-12 justify-center w-full h-48 bg-dark grid grid-rows-4 gap-8">
    <div class="w-80 flex justify-around text-white text-center">
      <!-- <g-link class="underline" to="/about">Sobre mí</g-link> -->
      <g-link 
        class="underline" 
        to="/blog"
        title="Ir al blog">
          Blog
      </g-link>
      <g-link 
        class="underline" 
        to="/cookies"
        title="Ir a las políticas de cookies">
          Política de cookies
      </g-link>
    </div>
    <h5 class="font-serif text-white text-center ">
      © {{ year }} | La menina perdida
    </h5>
    <div class="text-center text-background">
      Web creada por
      <g-link 
        class="text-gold underline" 
        to="https://twitter.com/varnebla"
        title="Víctor Arnedo en twitter"
        >Víctor Arnedo</g-link
      >
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    year: function() {
      let date = new Date()
      return date.getFullYear().toString()
    },
  },
}
</script>
