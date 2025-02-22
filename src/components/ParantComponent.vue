<template>
  <div>
    <h1>부모 컴포넌트</h1>
    <child-component :message="parentMessage"></child-component>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      parentMessage: 'Hello, 자식 컴포넌트!',
    }
  },
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
