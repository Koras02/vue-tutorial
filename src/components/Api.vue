<template>
  <div class="api-wrapper">
    <h1>API 데이터</h1>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      items: [],
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        )
        this.items = response.data
      } catch (error) {
        console.error('API 호출 중 에러가 발생했습니다.', error)
      }
    },
  },
}
</script>

<style scope>
ul {
  list-style-type: none;
  display: flex;
  padding: 20px;
}

.api-wrapper {
  width: 100%;
  margin: auto;
  max-width: 1300px;
}
</style>
