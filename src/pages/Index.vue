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
        <Presentation
          class="hidden tablet:inline col-start-8  laptop:col-start-8 desktop:col-start-6 col-span-5 laptop:col-span-5 desktop:col-span-4"
          imgClass="h-142 mobileS:h-156 tablet:h-164 z-0 -mt-6"
          :picture="landingInfo.presentation_picture"
        />
      </transition>
      <transition name="menina-nav-fade" appear>
        <Presentation
          class="hidden desktop:inline desktop:col-start-10 desktop:col-span-3"
          imgClass="h-112 z-0 mx-2 mt-32"
          :picture="landingInfo.presentation_secondary_picture"
        />
      </transition>
    </section>
    <section></section>
    <section id="introduction" class="mb-24 tablet:mb-32">
      <IntroInfo class="mb-12" />
      <IntroPic :option="landingInfo.intro_picture" />
    </section>
    <section class="mb-32 max-w-3xl mx-auto">
      <ArtInfo />
      <Art :option="primaryArt" :odd="true" />
      <Art :option="secondaryArt" :odd="false" />
      <Art :option="tertiaryArt" :odd="true" />
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
import Presentation from '~/components/Landing/Presentation.vue'
// import PresentationSmall from '~/components/Landing/PresentationSmall.vue'
import IntroInfo from '~/components/Landing/IntroInfo.vue'
import IntroPic from '~/components/Landing/IntroPic.vue'
import ArtInfo from '~/components/Landing/ArtInfo.vue'
import Art from '~/components/Landing/Art.vue'

export default {
  components: {
    Slogan,
    Presentation,
    // PresentationSmall,
    IntroInfo,
    IntroPic,
    ArtInfo,
    Art,
  },
  computed: {
    landingInfo() {
      return this.$page.landing.edges[0].node
    },
    primaryArt() {
      return {
        title: 'Arte y cultura ',
        content:
          'Bajo esta etiqueta encontraréis todos aquellos posts dedicados a analizar las obras de arte (pintura, escultura, arquitectura). La intención no es hablar de aspectos técnicos, sino adentrarnos en todas las curiosidades y datos interesantes que hay detrás de las obras y sus artistas. ¿Por qué Cupido aparece dormido en esa obra? ¿Por qué el Guernika es en blanco y negro? En definitiva, hablaremos de aquellas curiosidades y secretos que envuelven las obras.',
        image: this.landingInfo.art_primary_picture,
      }
    },
    secondaryArt() {
      return {
        title: 'Disney y el arte',
        content:
          'Como apasionada de Disney, reconozco que he visto todas sus películas en bucle desde que tengo uso de razón. A medida que crecemos vamos entendiendo mejor algunas situaciones con doble sentido que aparecen. Pero, además, vamos observando y analizando más las escenas. Así fue como me di cuenta que en las películas de Walt Disney son muchas las referencias que se hacen al mundo del arte y en esta sección vamos a analizarlas.',
        image: this.landingInfo.art_secondary_picture,
      }
    },
    tertiaryArt(){
      return {
        title: 'Viajes',
        content:
          'En un mundo azotado por la pandemia, tener un apartado dedicado a los viajes es, cuanto menos, arriesgado. Pero yo no quiero dejar (en la medida de lo posible) de descubrir lugares interesantes y llenos de cultura. Bajo la etiqueta de “viajes” os hablaré de las diferentes escapadas que realice, teniendo en cuenta que el foco siempre estará puesto en la cultura, tradiciones o curiosidades del lugar. ',
        image: this.landingInfo.art_tertiary_picture,
      }
    }
  }
}
</script>

<style scoped></style>
