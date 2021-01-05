<template>
  <nuxt-link :to="getLink" class="post-preview">
    <div class="post-preview__image">
      <img :src="post.img" :alt="post.title">
    </div>
    <div class="post-preview__content">
      <h3 class="post-preview__title">{{post.title}}</h3>
    </div>
  </nuxt-link>
</template>

<script>
  export default {
    name: "PostPreview",
    props: {
      post: {
        type: Object,
        required: true
      },
      admin: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      getLink() {
        return this.admin ? `/admin/${this.post.id}` : `/posts/${this.post.id}`
      }
    }
  }
</script>

<style lang="scss">
  .post-preview {
    width: 48%;
    padding: 16px;
    margin-bottom: 20px;
    text-align: center;

    &__image {
      margin-bottom: 16px;
    }

  }
</style>
