<template>
  <div class="comments">
    <div class="container">
      <h2 class="title">Comments</h2>
      <div class="comments__items">
        <div class="comments__item" v-for="comment in comments" :key="comment.id">
          <p class="comments__name">{{comment.name}}</p>
          <p>{{comment.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Comments",
    props: {
      comments: {
        type: Array,
        default: null
      }
    }
  }
</script>

<style lang="scss">
  .comments {
    text-align: center;

    &__item {
      padding: 20px;
      width: 600px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 20px;
      background-color: #fff;
    }

    &__name {
      color: blue;
      margin-bottom: 10px;
    }
  }
</style>
