<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Contact me</h2>
      <Message v-if="message" :message="message"/>
      <form class="contact__form" @submit.prevent="onSubmit">
        <AppInput v-model="user.name">Name:</AppInput>
        <AppInput v-model="user.email" type="email">Email:</AppInput>
        <AppTextarea v-model="user.text">Text:</AppTextarea>
        <div class="controls">
          <Button class="btnWhite">Submit !</Button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Contact",
    data() {
      return {
        message: null,
        user: {
          name: '',
          email: '',
          text: '',
        }
      }
    },
    methods: {
      onSubmit() {
        this.message = 'Submitted!';
        this.user.name = '';
        this.user.email = '';
        this.user.text = '';
      }
    }
  }
</script>

<style lang="scss">
  .contact {
    background-color: #5281b9;
    text-align: center;
    color: #fff;

    .title {
      color: #fff;
    }

    &__form {
      max-width: 600px;
      margin: 30px auto;
    }
  }
</style>
