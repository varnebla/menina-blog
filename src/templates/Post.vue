<template>
  <Layout>
    <transition name="post-slide">

    <div>
      <div
        class="w-full h-64 bg-cover bg-center"
        :style="{ 'background-image': 'url(' + $page.post.thumbnail + ')' }"
      ></div>
      <div class="px-5 ">
        <h1 class="mt-5 mb-2 font-titles leading-tight">{{ $page.post.title }}</h1>
        <p class="font-light opacity-75 mb-4 text-lg laptop:text-xl">{{ $page.post.abstract }}</p>
        <p class="opacity-50 mb-8 text-xl">Publicado el {{ $page.post.date }}</p>
        <div class="font-light content text-lg laptop:text-xl" v-html="$page.post.content"></div>
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
export default {}
</script>

<style>
.content h1,
h2,
h3 {
  @apply mb-6;
}
.content p {
  @apply mb-4;
}
.content li {
  @apply mb-2;
}
.content ol {
  @apply list-decimal mb-4;
}
.content a {
  @apply underline text-gold;
}
</style>
