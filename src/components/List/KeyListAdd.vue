<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
    <button @click="addItem">Add Item</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'item 1' },
        { id: 2, name: 'item 2' },
      ],
    }
  },
  methods: {
    addItem() {
      const newId = this.items.length + 1
      this.items.push({ id: newId, name: `item ${newId}` })
    },
  },
}
</script>
