<template>
  <div class="control">
    <label>
      <slot/>
      <input :type="type"
             v-bind="$attrs"
             :value="value"
             @input="$emit('input',$event.target.value)"
      >
    </label>
  </div>
</template>

<script>
  export default {
    name: "AppInput",
    props: {
      value: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      }
    }
  }
</script>

<style scoped>

</style>
