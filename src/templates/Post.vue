<template>
  <Landing>
    <ProgressBar :progress="progress"/>
    <transition name="post-slide">
      <section class="mb-8 max-w-3xl m-auto px-3 tablet:px-8 laptop:px-0">
        <article class="mb-8">
          <p class="opacity-50 text-lg w-full border-b-2 border-primary mb-8">
            Publicado el {{ $page.post.date }}
          </p>
          <div class="grid grid-cols-1 tablet:grid-cols-2 gap-10">
            <div class="col-span-1">
              <h1 class="mb-2 font-titles leading-tight">
                {{ $page.post.title }}
              </h1>
              <p class="font-light opacity-50 mb-4 text-base">
                {{ $page.post.abstract }}
              </p>

            </div>
            <div
              class="cols-span-1 h-80 bg-cover bg-center text-right"
              :style="{ 'background-image': 'url(' + $page.post.thumbnail + ')' }"
            ></div>
          </div>
          <div class="">
            <div
              class="font-light content text-lg leading-relaxed"
              v-html="$page.post.content"
            ></div>
          </div>
        </article>
        <div class="border-t border-gold mt-12">
          <p class="mt-12">
            Espero que te haya gustado este post. Si quieres comentar algo no dudes en mandarme un
            <a
              class="underline text-gold"
              href="https://twitter.com/lameninaperdida"
              >tweet</a
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
    }
  }
</page-query>

<script>
import ProgressBar from '~/components/Headers/ProgressBar.vue'

export default {
  data: function () {
    return {
      progress: 0,
    }
  },
  components: { ProgressBar },
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
      const imagesParagraph = document.querySelectorAll('p')
      imagesParagraph.forEach((el) => {
        if (el.firstChild && el.firstChild.tagName === 'IMG') {
          el.classList.add('flex', 'justify-center')
          el.firstChild.setAttribute('class', 'mt-8')
        }
      })
    },
    progressState() {
      if (process.isClient)
        this.progress = (
          (window.scrollY / (document.body.offsetHeight - window.innerHeight)) *
          100
        ).toFixed(2)
    },
  },
}
</script>

<style></style>
