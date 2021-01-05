<template>
  <section class="new-comment">
    <div class="container">
      <h2 class="title">New comment</h2>
      <Message v-if="message" :message="message"/>
      <form class="new-comment__form" @submit.prevent="onSubmit">
        <AppInput v-model="comment.name">Name:</AppInput>
        <AppTextarea v-model="comment.text">Text:</AppTextarea>
        <div class="controls">
          <Button>Submit !</Button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>

  export default {
    name: "NewComment",
    props: {
      postId: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        message: null,
        comment: {
          name: '',
          text: '',
        }
      }
    },
    methods: {
      onSubmit() {
        this.$store.dispatch('addComment', {
          postId: this.postId,
          publish: false,
          ...this.comment
        })
          .then(() => {
            this.message = 'Submitted!';
            this.comment.name = '';
            this.comment.text = '';
          }).catch(e => console.error(e));

      }
    }
  }
</script>

<style lang="scss">
  .new-comment {
    text-align: center;

    &__form {
      max-width: 600px;
      margin: 30px auto;
    }
  }
</style>
