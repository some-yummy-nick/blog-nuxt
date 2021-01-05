<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <nuxt-link to="/" class="logo" style="text-transform: uppercase">Blog</nuxt-link>
          <ul class="navbar-list">
            <li class="navbar-item" v-for="link in links" :key="link.title">
              <nuxt-link class="navbar-link" :title="link.title" :to="link.url">{{link.title}}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        links: [
          {title: 'Posts', url: '/posts'},
          {title: 'About', url: '/about'},
          {title: 'Admin', url: '/admin'},
        ]
      }
    }
  }
</script>

<style>
  .logo {
    color: #333;
  }

  .navbar-link.nuxt-link-exact-active {
    color: #5247e7
  }

</style>
