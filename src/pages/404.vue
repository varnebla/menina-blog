<template>
  <Landing>
    <main class="max-w-xl mx-auto mb-8 flex flex-col items-center justify-around">
      <p class="text-2xl text-center mb-4">
      Por mucho que hemos buscado, no hemos encontrado lo que buscas. Vuelve al inicio para encontrar más contenido interesante.
      </p>
      <ArrowButton
        path="/"
        text="Ir a la página de inicio"
        class="w-72 mb-8"
      />
      <ImageBanner         
        :picInformation="pictureInfo"
        imgClass="h-120 w-88"
      />
    </main>
  </Landing>
</template>

<script>
import ImageBanner from '~/components/Landing/ImageBanner.vue'
import ArrowButton from '~/components/General/ArrowButton.vue'
  export default {
    components: {
      ImageBanner,
      ArrowButton
    },
    computed:{
      pictureInfo() {
        return {
          title: 'Bufón con libros',
          getImageName: ()=> {
            return 'v1605469151/Bufon_libros_vkbp8e.jpg'
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>