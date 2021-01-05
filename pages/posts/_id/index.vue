<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Post :post="post"/>

    <Comments v-if="comments.length" :comments="comments"/>
    <p v-else style="text-align: center;">Comments: 0</p>
    <NewComment :postId="$route.params.id"/>
  </div>
</template>

<script>
  import axios from 'axios'

  import Post from '~/components/Post';
  import Comments from '~/components/comments/Comments';
  import NewComment from '~/components/comments/NewComment';

  export default {
    name: "index",
    components: {
      Post, Comments, NewComment
    },
    head() {
      let title = this.post.title,
        description = this.post.desc,
        type = 'article',
        img = this.post.img;

      return {
        title,
        meta: [
          {hid: 'description', name: 'description', content: description},
          {hid: 'og:description', name: 'og:description', content: description},
          {hid: 'og:title', name: 'og:title', content: title},
          {hid: 'og:type', name: 'og:type', content: type},
          {hid: 'og:img', name: 'og:img', content: img},
        ]
      }
    },
    async asyncData(context) {
      let [post, comments] = await Promise.all([
        axios.get(`https://blog-nuxt-888fb-default-rtdb.firebaseio.com/posts/${context.params.id}.json`),
        axios.get(`https://blog-nuxt-888fb-default-rtdb.firebaseio.com/comments.json`)
      ]);

      let commentsArrayRes = Object.values(comments.data).filter(comment => (comment.postId === context.params.id && comment.publish));

      return {
        post: post.data,
        comments: commentsArrayRes,
      }
    }
    // validate({params}) {
    //   // Check the number id
    //   return /^\d+$/.test(params.id)
    // }
  }
</script>

<style lang="scss">
  .post {
    max-width: 900px;
    margin: 0 auto;

    &__header {
      margin-bottom: 30px;
      text-align: center;

      img {
        margin-bottom: 10px;
      }

      h1 {
        color: #999;
      }
    }
  }
</style>
