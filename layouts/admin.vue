<template>
  <no-ssr>
    <div class="admin wrapper">
      <div class="wrapper-content wrapper-content--fixed">
        <Header/>
        <Nuxt/>
      </div>
    </div>
  </no-ssr>
</template>

<script>
  import Header from "~/components/common/Header";

  export default {
    components: {Header},
    middleware: ['auth']
  }
</script>

<style lang="scss">
  .admin {
    text-align: center;
  }
</style>
