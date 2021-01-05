<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent="onSubmit">
        <AppInput required v-model="post.title">Title</AppInput>
        <AppInput v-model="post.img">Img link</AppInput>
        <AppTextarea v-model="post.desc">Description</AppTextarea>
        <div class="controls">
          <Button class="btnDanger" @click="cancel" type="button">Cancel</Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
  export default {
    name: "NewPostForm",
    props: {
      postEdit: {
        type: Object
      }
    },
    data() {
      return {
        post: this.postEdit ? {...this.postEdit} : {
          title: '',
          desc: '',
          img: '',
        }
      }
    },
    methods: {
      onSubmit() {

        this.$emit('submit', this.post);
      },
      cancel() {
        this.$router.push('/admin')
      }
    }
  }
</script>

<style scoped>

</style>
