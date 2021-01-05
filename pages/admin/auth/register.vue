<template>
  <section class="auth">
    <div class="container">
      <form @submit.prevent="onSubmit" class="auth__form">
        <AppInput required type="email" v-model="user.email">Email:</AppInput>
        <AppInput required type="password" v-model="user.password">Password:</AppInput>
        <div class="controls">
          <Button>Register !</Button>
          <nuxt-link class="admin__link" to="/admin/auth/login">Login</nuxt-link>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
  export default {
    name: "index",
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
        this.$store.dispatch('register', this.user)
          .then(() => {
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
