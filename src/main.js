import Vue, { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 라우터 import
import store from './store'

const app = createApp(App)
app.use(router) // 라우터 추가
app.use(store) // vuex 스토어 추가
app.mount('#app')
