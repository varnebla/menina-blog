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
          :picInformation="mainImage"
        />
      </transition>
      <transition name="menina-nav-fade" appear>
        <ImageBanner
          class="hidden desktop:inline desktop:col-start-10 desktop:col-span-3"
          imgClass="h-112 z-0 mx-2 mt-32"
          :picInformation="secondaryImage"
        />
      </transition>
    </section>
    <section id="introduction" class="mb-24 tablet:mb-32">
      <IntroInfo class="mb-12" />
      <ImageBanner imgClass="max-w-3xl mx-auto h-104" :picInformation="introImage"/>
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
import {images} from '~/helpers/imagesData.js'

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
      const {name, title} = this.findElement(1);
      return new ImageInformation(name, title, null, this.landingInfo.presentation_picture);
    },
    secondaryImage(){
      const {name, title} = this.findElement(2);
      return new ImageInformation(name, title, null, this.landingInfo.presentation_secondary_picture);
    },
    introImage(){
      const {name, title} = this.findElement(3);
      return new ImageInformation(name, title, null, this.landingInfo.intro_picture);
    },
    primaryArtImage() {
      const {name, title, content} = this.findElement(4);
      return new ImageInformation(name, title, content,
        this.landingInfo.art_primary_picture,
      )
    },
    secondaryArtImage() {
      const {name, title, content} = this.findElement(5);
      return new ImageInformation(name, title, content,
        this.landingInfo.art_secondary_picture,
      )
    },
    tertiaryArtImage(){
      const {name, title, content} = this.findElement(6);
      return new ImageInformation(name, title, content,
        this.landingInfo.art_tertiary_picture
      )
    }
  },
  methods: {
    findElement(id){
      return images.find(el => el.hid === id)
    }
  }
}
</script>

<style scoped></style>
