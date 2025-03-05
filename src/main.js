import Vue, { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 라우터 import

const app = createApp(App)
app.use(router) // 라우터 추가
app.mount('#app')
