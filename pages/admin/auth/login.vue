<template>
  <section class="auth">
    <div class="container">
      <form @submit.prevent="onSubmit" class="auth__form">
        <AppInput required type="email" v-model="user.email">Email:</AppInput>
        <AppInput required type="password" v-model="user.password">Password:</AppInput>
        <div class="controls">
          <Button>Login !</Button>
          <nuxt-link class="admin__link" to="/admin/auth/register">Register</nuxt-link>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
  export default {
    name: "index",
    head() {
      let title = 'Login',
        type = 'site';

      return {
        title,
        meta: [
          {hid: 'og:title', name: 'og:title', content: title},
          {hid: 'og:type', name: 'og:type', content: type},
        ]
      }
    },
    data() {
      return {
        user: {
          email: '',
          password: '',
        }
      }
    },
    methods: {
      onSubmit() {
        this.$store.dispatch('login', this.user)
          .then(res => {
            this.user.email = '';
            this.user.password = '';
            this.$router.push('/admin');
          })
          .catch(e=>{
            this.user.email = '';
            this.user.password = '';
            console.error(e);
          })
      }
    }
  }
</script>

<style lang="scss">
  .auth {
    max-width: 400px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;

    &__form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 80vh;

      input {
        min-width: 460px;
      }
    }
  }
</style>
