<template>
  <section class="post">
    <div class="container">
      <div class="post__header">
        <img :src="post.img" :alt="post.title">
        <h1>{{post.title}}</h1>
      </div>
      <div class="post__body">
        {{post.desc}}
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Post",
    props: {
      post: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
