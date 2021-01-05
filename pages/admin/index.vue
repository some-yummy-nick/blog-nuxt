<template>
  <div class="admin">
    <h1 class="title">Admin</h1>
    <nuxt-link class="admin__link" to="/admin/new-post">Create new post</nuxt-link>
    <nuxt-link class="admin__link" to="/admin/comments">Comments</nuxt-link>
    <nuxt-link class="admin__link" to="/admin/auth/login">Login</nuxt-link>
    <nuxt-link class="admin__link" to="/admin/auth/register">Register</nuxt-link>
    <Button @click="logout" class="btnWhite">Logout</Button>
    <PostList :admin=true :posts="posts"/>
  </div>
</template>

<script>

  export default {
    layout: 'admin',
    computed: {
      posts() {
        return this.$store.getters.getPosts
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout')
          .then(() => this.$router.push('/admin/auth'))
      }
    }
  }
</script>

<style lang="scss">
  .admin {
    &__link {
      display: inline-block;
      vertical-align: middle;

      &:not(:first-of-type) {
        &::before {
          content: " | ";
          display: inline-block;
          vertical-align: middle;
          padding: 0 5px;
        }
      }

    }
  }
</style>
