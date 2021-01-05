<template>
  <div>
    <h2>Create post</h2>
    <NewPostForm @submit="onSubmit"/>
  </div>
</template>

<script>
  import NewPostForm from '@/components/admin/NewPostForm'

  export default {
    name: "index",
    layout: 'admin',
    components: {NewPostForm},
    methods: {
      onSubmit(post) {
       this.$store.dispatch('addPost', post)
         .then(()=>this.$router.push('/admin'))
      }
    }
  }
</script>

<style>

</style>
