<template>
  <ul>
    <li v-for="item in items" :key="item.id">{{ item.name }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'item1' },
        { id: 2, name: 'item2' },
        { id: 3, name: 'item3' },
      ],
    }
  },
}
</script>
