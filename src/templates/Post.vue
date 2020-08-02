<template>
  <Landing>
    <transition name="post-slide">
      <section class="mb-8 max-w-3xl m-auto">
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
        <div>
          <p class="px-5">
            Si quieres comentar algo no dudes en mandarme un
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
export default {
  mounted: function () {
    this.centerImages()
  },
  methods: {
    centerImages() {
      const imagesParagraph = document.querySelectorAll('p')
      imagesParagraph.forEach((el) => {
        if (el.firstChild && el.firstChild.nodeType === 1) {
          //img is nodeType = 1
          el.classList.add('flex', 'justify-center')
          el.firstChild.setAttribute('class', 'mt-8')
        }
      })
    },
  },
}
</script>

<style></style>
