<template>
  <section class="not-found">
    <div class="container">
      <div class="not-found__wrapper">
        <h1 class="title">Page not found</h1>
        <nuxt-link to="/">Back to main page</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "error"
  }
</script>

<style lang="scss">
  .not-found {
    &__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 80vh;
    }
  }
</style>
