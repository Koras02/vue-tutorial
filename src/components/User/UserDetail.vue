<template>
  <div>
    <h2>User Detail</h2>
    <p v-if="user">
      <!-- user가 존재할 때만 정보 표시 -->
      ID: {{ user.id }}<br />
      Name: {{ user.name }}
    </p>
    <p v-else>Loading...</p>
    <!-- 데이터 로딩 중 표시 -->
  </div>
</template>

<script>
export default {
  name: 'UserDetail',
  data() {
    return {
      user: null, // 초기값을 null로 설정
    }
  },
  created() {
    const userId = this.$route.params.id // URL에서 ID 가져오기
    // Mock 데이터 예시
    const users = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Alice Johnson' },
    ]
    this.user = users.find((user) => user.id == userId) || null // 유저 찾기
  },
}
</script>

<style scoped>
p {
  margin: 5px 0;
}
</style>
