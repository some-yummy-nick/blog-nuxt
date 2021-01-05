<template>
  <div class="post-list">
    <div class="post-list__wrapper">
      <PostPreview :admin="admin" v-for="post in posts" :post="post" :key="post.id"/>
    </div>
  </div>
</template>

<script>
  import PostPreview from '~/components/PostPreview'

  export default {
    name: "PostList",
    props: {
      posts: {
        type: Array,
        required: true
      },
      admin: {
        type: Boolean,
        default: false
      }
    },
    components: {PostPreview}
  }
</script>

<style lang="scss">
  .post-list {
    text-align: center;

    &__wrapper {
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>
