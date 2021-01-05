<template>
  <div>
    <h2>Edit post</h2>
    <NewPostForm :postEdit="post" @submit="onSubmit"/>
  </div>
</template>

<script>
  import axios from 'axios'
  import NewPostForm from '@/components/admin/NewPostForm'

  export default {
    layout: 'admin',
    components: {NewPostForm},
    asyncData(context) {
      return axios.get(`https://blog-nuxt-888fb-default-rtdb.firebaseio.com/posts/${context.params.postId}.json`)
        .then(res => {
          return {
            post: {...res.data, id: context.params.postId}
          }
        })
        .catch(e => {
          context.error(e)
        })
    },
    methods: {
      onSubmit(post) {
        this.$store.dispatch('editPost', post)
          .then(()=>this.$router.push('/admin'))
      }
    }
  }
</script>

<style>

</style>
