<template>
  <div>
    <ParantComponent />
    <ChildComponent :message="parentMessage" />
  </div>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue'
import ParantComponent from './components/ParantComponent.vue'

export default {
  name: 'App',
  components: {
    ChildComponent,
    ParantComponent,
  },
  data() {
    return {
      parentMessage: 'Hello, World ',
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
