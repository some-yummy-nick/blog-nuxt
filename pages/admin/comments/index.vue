<template>
  <no-ssr>
    <CommentTable :thead="['Name','Text','Status','Change Status','Delete']">
      <tbody slot="tbody">
      <tr v-for="comment in comments" :key="comment.id">
        <td><span>{{comment.name}}</span></td>
        <td><span>{{comment.text}}</span></td>
        <td>
          <span class="status true" v-if="comment.publish">Publish</span>
          <span class="status false" v-else>Hidden</span>
        </td>
        <td>
          <Button @click="changeStatus(comment)">Change Status</Button>
        </td>
        <td>
          <Button class="btnDanger" @click="deleteComment(comment)">Delete</Button>
        </td>
      </tr>
      </tbody>
    </CommentTable>
  </no-ssr>
</template>

<script>
  import axios from 'axios'
  import CommentTable from '@/components/admin/CommentTable'

  export default {
    layout: 'admin',
    components: {CommentTable},
    data() {
      return {
        comments: []
      }
    },
    mounted() {
      this.loadComments()
    },
    methods: {
      loadComments() {
        axios.get('https://blog-nuxt-888fb-default-rtdb.firebaseio.com/comments.json')
          .then(res => {
            let commentsArray = [];
            Object.keys(res.data).forEach(key => {
              const comment = res.data[key];
              commentsArray.push({...comment, id: key})
            });
            this.comments = commentsArray;
          })
      },
      changeStatus(comment) {
        comment.publish = !comment.publish;
        return axios.put(`https://blog-nuxt-888fb-default-rtdb.firebaseio.com/comments/${comment.id}.json`, comment)
      },
      deleteComment(comment) {
        return axios.delete(`https://blog-nuxt-888fb-default-rtdb.firebaseio.com/comments/${comment.id}.json`)
          .then(() => this.loadComments())
      }
    }
  }
</script>

<style>

</style>
