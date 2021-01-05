<template>
  <section>
    <div class="container">
      <table>
        <thead>
        <tr>
          <th v-for="(th,index) in thead" :key="index">{{th}}</th>
        </tr>
        </thead>
        <slot name="tbody"></slot>
      </table>
    </div>
  </section>
</template>

<script>
  export default {
    name: "CommentTable",
    props: {
      thead: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  table {
    width: 100%;
    line-height: 1.5em;
    border-collapse: separate;
    border-spacing: 0 14px;

    thead th {
      padding: 20px 22px;
      white-space: nowrap;
      font-size: 20px;
    }

    tbody tr {
      background-color: #fff;
      transition: all .25s cubic-bezier(.02, .01, .47, 1);
      box-shadow: 0 16px 16px rgba(0, 0, 0, .01);
    }

    td {
      padding: 20px;
    }
  }
</style>
