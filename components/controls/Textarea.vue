<template>
  <div class="control">
    <label>
      <slot/>
      <textarea
             :value="value"
             @input="$emit('input',$event.target.value)"
      ></textarea>
    </label>
  </div>
</template>

<script>
  export default {
    name: "AppTextarea",
    props: {
      value: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>

</style>
