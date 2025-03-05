<!-- src/views/UserLayout.vue -->
<template>
  <div>
    <h1>User Management</h1>
    <nav>
      <router-link to="/user">User List</router-link>
      <router-link to="/user/1">User Detail (ID: 1)</router-link>
    </nav>
    <router-view />
    <!-- 중첩된 라우트의 컴포넌트가 여기 렌더링됨 -->
  </div>
</template>

<script>
export default {
  name: 'UserLayout',
}
</script>

<style scoped>
nav {
  margin-bottom: 20px;
}
</style>
