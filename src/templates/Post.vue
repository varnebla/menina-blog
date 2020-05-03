<template>
  <Layout>
    <div>
      <div
        class="w-full h-64 bg-cover bg-center"
        :style="{ 'background-image': 'url(' + $page.post.thumbnail + ')' }"
      ></div>
      <div class="px-5 ">
        <h1 class="mt-5 mb-2 font-titles">{{ $page.post.title }}</h1>
        <p class="opacity-50 mb-8">Publicado el {{ $page.post.date }}</p>
        <div
          class="font-light opacity-75 content"
          v-html="$page.post.content"
        ></div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Post($id:ID!){
    post(id: $id) {
      title
      date (format: "DD/MM/YYYY")
      content
      thumbnail
    }
  }
</page-query>

<script>
export default {}
</script>

<style>
.content > p {
  @apply mb-6;
}
</style>
