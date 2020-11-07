<template>
  <Landing>
    <section
      id="presentation"
      class="w-full h-120 mobileS:h-156 tablet:h-172 grid grid-cols-12 mb-16 tablet:mb-32"
    >
      <Slogan
        class="col-start-3 col-span-8 tablet:col-start-2 desktop:col-start-1 tablet:col-span-5 desktop:col-span-4"
      />
      <transition name="menina-nav-fade" appear>
        <ImageBanner
          class="hidden tablet:inline col-start-8  laptop:col-start-8 desktop:col-start-6 col-span-5 laptop:col-span-5 desktop:col-span-4"
          imgClass="h-142 mobileS:h-156 tablet:h-164 z-0 -mt-6"
          :picture="mainImage.getImageName()"
        />
      </transition>
      <transition name="menina-nav-fade" appear>
        <ImageBanner
          class="hidden desktop:inline desktop:col-start-10 desktop:col-span-3"
          imgClass="h-112 z-0 mx-2 mt-32"
          :picture="secondaryImage.getImageName()"
        />
      </transition>
    </section>
    <section></section>
    <section id="introduction" class="mb-24 tablet:mb-32">
      <IntroInfo class="mb-12" />
      <ImageBanner imgClass="max-w-3xl mx-auto" :picture="introImage.getImageName()"/>
      <!-- <IntroImage :option="introImage.getImageName()" /> -->
    </section>
    <section class="mb-32 max-w-3xl mx-auto">
      <ArtInfo />
      <Art :option="primaryArtImage" :odd="true" />
      <Art :option="secondaryArtImage" :odd="false" />
      <Art :option="tertiaryArtImage" :odd="true" />
    </section>
  </Landing>
</template>

<page-query>
query Landing{
  landing: allLanding{
      edges{
        node{
          presentation_picture
          presentation_secondary_picture
          intro_picture
          art_primary_picture
          art_secondary_picture
          art_tertiary_picture
        }
      }
    }
}
</page-query>

<script>
import Slogan from '~/components/Landing/Slogan.vue'
import ImageBanner from '~/components/Landing/ImageBanner.vue'
import IntroInfo from '~/components/Landing/IntroInfo.vue'
import ArtInfo from '~/components/Landing/ArtInfo.vue'
import Art from '~/components/Landing/Art.vue'
import ImageInformation from '~/helpers/imageInformation.js'

export default {
  components: {
    Slogan,
    ImageBanner,
    IntroInfo,
    ArtInfo,
    Art,
  },
  computed: {
    landingInfo() {
      return this.$page.landing.edges[0].node
    },
    mainImage(){
      return new ImageInformation(null, null, this.landingInfo.presentation_picture);
    },
    secondaryImage(){
      return new ImageInformation(null, null, this.landingInfo.presentation_secondary_picture);
    },
    introImage(){
      return new ImageInformation(null, null, this.landingInfo.intro_picture);
    },
    primaryArtImage() {
      return new ImageInformation(
        'Arte y cultura ',
        'Bajo esta etiqueta encontraréis todos aquellos posts dedicados a analizar las obras de arte (pintura, escultura, arquitectura). La intención no es hablar de aspectos técnicos, sino adentrarnos en todas las curiosidades y datos interesantes que hay detrás de las obras y sus artistas. ¿Por qué Cupido aparece dormido en esa obra? ¿Por qué el Guernika es en blanco y negro? En definitiva, hablaremos de aquellas curiosidades y secretos que envuelven las obras.',
        this.landingInfo.art_primary_picture,
      )
    },
    secondaryArtImage() {
      return new ImageInformation(
        'Disney y el arte',
        'Como apasionada de Disney, reconozco que he visto todas sus películas en bucle desde que tengo uso de razón. A medida que crecemos vamos entendiendo mejor algunas situaciones con doble sentido que aparecen. Pero, además, vamos observando y analizando más las escenas. Así fue como me di cuenta que en las películas de Walt Disney son muchas las referencias que se hacen al mundo del arte y en esta sección vamos a analizarlas.',
        this.landingInfo.art_secondary_picture,
      )
    },
    tertiaryArtImage(){
      return new ImageInformation(
        'Viajes',
        'En un mundo azotado por la pandemia, tener un apartado dedicado a los viajes es, cuanto menos, arriesgado. Pero yo no quiero dejar (en la medida de lo posible) de descubrir lugares interesantes y llenos de cultura. Bajo la etiqueta de “viajes” os hablaré de las diferentes escapadas que realice, teniendo en cuenta que el foco siempre estará puesto en la cultura, tradiciones o curiosidades del lugar. ',
        this.landingInfo.art_tertiary_picture
      )
    }
  }
}
</script>

<style scoped></style>
