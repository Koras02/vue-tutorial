<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
div {
  color: red;
}
</style>
