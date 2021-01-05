<template>
  <div class="wrapper-content wrapper-content--fixed">
    <h2 class="title" style="text-align: center;">My posts:</h2>
    <PostList :posts="posts"/>
  </div>
</template>

<script>

  export default {
    head() {
      let title = 'My blog page',
        description = 'My SSR blog! With Nuxt.js',
        type = 'site';

      return {
        title,
        meta: [
          {hid: 'description', name: 'description', content: description},
          {hid: 'og:description', name: 'og:description', content: description},
          {hid: 'og:title', name: 'og:title', content: title},
          {hid: 'og:type', name: 'og:type', content: type},
        ]
      }
    },
    computed: {
      posts() {
        return this.$store.getters.getPosts
      }
    }
  }
</script>

<style lang="scss">
  .promo {
    text-align: center;

    p {
      color: #999;
    }
  }
</style>
