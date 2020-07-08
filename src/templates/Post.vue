<template>
  <Layout>
    <transition name="post-slide">
      <div class="mb-8">

    <div class="mb-8">
      <div
        class="w-full h-64 bg-cover bg-center"
        :style="{ 'background-image': 'url(' + $page.post.thumbnail + ')' }"
      ></div>
      <div class="px-5">
        <h1 class="mt-5 mb-2 font-titles leading-tight">{{ $page.post.title }}</h1>
        <p class="font-light opacity-75 mb-4 text-lg laptop:text-lg">{{ $page.post.abstract }}</p>
        <p class="opacity-50 mb-8 text-lg">Publicado el {{ $page.post.date }}</p>
        <div class="font-light content text-lg laptop:text-lg" v-html="$page.post.content"></div>
      </div>
    </div>
    <div>
      <p class="px-5">Si quieres comentar algo no dudes en mandarme un 
        <a class="underline text-gold" href="https://twitter.com/lameninaperdida">tweet</a>
      </p>
    </div>
      </div>
    </transition>
  </Layout>
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
  mounted: function() {
    this.centerImages()
  },
  methods: {
    centerImages() {
      const imagesParagraph = document.querySelectorAll('p')
      imagesParagraph.forEach(el => {
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

<style>
.content h1,
h2,
h3 {
  @apply mb-6;
}
.content p,
.content div {
  @apply my-8;
}
.content li {
  @apply mb-2;
}
.content ol {
  @apply list-decimal mb-4 px-6;
}
.content a {
  @apply underline text-gold;
}
.content p > img {
  @apply text-center;
}
.content img:parent {
  @apply py-8 content-center;
}
</style>
