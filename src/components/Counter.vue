<template>
  <div>
    <h1>Count: {{ count }}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.getters.currentCount
    },
  },
  methods: {
    increment() {
      this.$store.dispatch('increment')
    },
    decrement() {
      this.$store.dispatch('decrement')
    },
  },
}
</script>
