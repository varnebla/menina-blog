<template>
  <Layout>
    <div>
      <h1>{{ $page.post.title }}</h1>
      <div v-html="$page.post.content"></div>
    </div>
  </Layout>
</template>

<page-query>
  query Post($id:ID!){
    post(id: $id) {
      title
      content
    }
  }
</page-query>

<script>
export default {}
</script>

<style scoped></style>
