<template>
  <Landing>
    <ProgressBar :progress="progress"/>
    <transition name="post-slide">
      <section class="mb-8 h-full max-w-3xl m-auto px-3 tablet:px-8 laptop:px-0">
        <article class="mb-8">
          <p class="opacity-50 text-lg w-full border-b-2 border-primary mb-8">
            Publicado el {{ $page.post.date }}
          </p>
          <div class="grid grid-cols-1 tablet:grid-cols-2 gap-10 mb-8">
            <div class="col-span-1">
              <h1 class="mb-2 font-titles leading-tight">
                {{ $page.post.title }}
              </h1>
              <p class="font-light opacity-50 mb-4 text-base">
                {{ $page.post.abstract }}
              </p>
              <TagList :option="$page.post.tags"/>

            </div>
            <ImageBanner class="cols-span-1 h-80" :picture="postThumbnail.getImageName()" />
            <!-- <div
              class="cols-span-1 h-80 bg-cover bg-center text-right"
              :style="{ 'background-image': 'url(' + $page.post.thumbnail + ')' }"
            ></div> -->
          </div>
          <div class="">
            <div
              id="content_block"
              class="font-light content text-lg leading-relaxed"
              v-html="$page.post.content"
            ></div>
          </div>
        </article>
        <p class="my-2">Compartir:</p>
        <ShareNetwork
          network="twitter"
          :url="`https://www.lameninaperdida.art${$route.path}`"
          :title="$page.post.title"
          :description="$page.post.abstract"
          hashtags="art,disney"
          twitter-user="lameninaperdida"
          class="bg-twitter text-white py-3 px-3 block rounded-full w-12 cursor-pointer hover:shadow-twitter transition-shadow duration-200 ease-in-out"
        >
        <Twitter
          viewBox="0 0 24 24"
          width="24"
          height="24"
          class=" text-white fill-current transform scale-75"
          key="twitter"
          focusable="false"
        />
        </ShareNetwork>
        <div class="border-t border-gold mt-12">
          <p class="mt-12">
            Puedes encontrar más posts como este en mi perfil de 
            <a
              class="underline text-gold"
              href="https://instagram.com/lameninaperdida"
              >Instagram</a
            >
          </p>
        </div>
      </section>
    </transition>
  </Landing>
</template>

<page-query>
  query Post($id:ID!){
    post(id: $id) {
      title
      date (format: "DD/MM/YYYY")
      abstract
      content
      thumbnail
      tags{
        title
      }
    }
  }
</page-query>

<script>
import ProgressBar from '~/components/Headers/ProgressBar.vue'
import TagList from '~/components/Blog/TagList.vue'
import ImageBanner from '~/components/Landing/ImageBanner.vue'
import Twitter from '~/assets/svg/Twitter.svg'
import { pictureFormat } from '~/helpers/helper-functions.js'
import ImageInformation from '~/helpers/imageInformation.js'

export default {
   metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        // Card general information for post
        {
          key: 'og:title',
          property: 'og:title',
          content: this.$page.post.title,
        },        
        {
          key: 'og:description',
          property: 'og:description',
          content: this.$page.post.abstract,
        },
          {
            key: 'og:image',
            property: 'og:image',
            content: this.$page.post.thumbnail,
          },
          // Card twitter information for post
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: this.$page.post.title,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: this.$page.post.abstract,
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: this.$page.post.thumbnail,
        },
      ],
    }
  },
  data: function () {
    return {
      progress: 0,
    }
  },
  components: { ProgressBar, Twitter, TagList, ImageBanner},
  mounted: function () {
    this.centerImages()
    document.addEventListener(
      'scroll',
      (event) => {
        this.progressState()
      },
      { passive: true }
    )
  },
  methods: {
    centerImages() {
      const imagesParagraph = document.querySelectorAll('#content_block p')
      imagesParagraph.forEach((el) => {
        if (el.firstChild && el.firstChild.tagName === 'IMG') {
          //paragraph contiene img
          el.classList.add('flex', 'justify-center')
          //img
          el.firstChild.setAttribute('class', 'w-full max-w-xl')
          //if safari, we have to add this property
          pictureFormat() === 'jp2' &&
          el.firstChild.setAttribute('style', 'height: intrinsic')

          //img footer
          if(el.nextElementSibling.tagName === 'DIV' && el.nextElementSibling.hasAttribute('align')) {
            el.classList.add('mb-2')
            el.nextElementSibling.setAttribute('class', 'w-full max-w-md mx-auto mb-8')
          }
          else el.classList.add('mb-8')
        }
        else el.setAttribute('class', 'mb-8')
      })
    },
    progressState() {
      if (process.isClient) {
        const headerHeight = document.querySelector('nav').offsetHeight;
        const postHeight = document.querySelector('main').offsetHeight;
        const footerHeight = document.querySelector('footer').offsetHeight;
        const bodyHeight = headerHeight + postHeight + footerHeight;
        this.progress = (
          (window.scrollY / (bodyHeight - window.innerHeight)) *
          100
        ).toFixed(2)

      }
    },
  },
  computed:{
    postThumbnail() {
      return new ImageInformation(null, null, null, this.$page.post.thumbnail)
    }
  }
}
</script>

<style></style>
