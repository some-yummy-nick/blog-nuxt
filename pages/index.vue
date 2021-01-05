<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="promo">
      <div class="container">
        <h1 class="title">Современный блог на Nuxt.js + Vue.js!</h1>
        <p>C рендерингом и админкой, полным SEO и небольшой CRM системой внутри!</p>
      </div>
    </section>
    <h2 class="title" style="text-align: center;">My lasts posts:</h2>
    <PostList :posts="posts"/>
    <Contact/>
  </div>
</template>

<script>
  import Contact from '~/components/Contact';

  export default {
    head() {
      let title = 'My SSR blog',
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
    },
    components: {Contact}
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
