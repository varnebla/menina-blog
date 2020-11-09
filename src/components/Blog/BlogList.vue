<template>
    <div class="h-full max-w-3xl mx-auto px-3 tablet:px-8 laptop:px-0">

    <PostCard
      v-for="edge in list.edges"
      :key="edge.node.title"
      :post="edge.node"
    />
    <Pager :info="list.pageInfo" :showLinks="true" :showNavigation="true" class="pager bottom-0 pb-8 text-xl text-center w-full flex justify-center" prevLabel="←" nextLabel="→" :range="2" linkClass="px-3"/>
    </div>
</template>
<script>
import PostCard from '~/components/PostCard.vue'
import { Pager } from 'gridsome'
export default {
  components: {
    PostCard,
    Pager,
  },
  props: ['list']
}
</script>

<style>
.pager .active {
  @apply text-gold underline;
}
</style>