import { createApp } from 'vue'
import './style.css'
import router from '@/router'
import App from './App.vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

createApp(App).use(router).use(ElementPlus).mount('#app')
