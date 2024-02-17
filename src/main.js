import { createApp } from 'vue'
import App from './App.vue'
import 라우터 from './router.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(라우터).mount('#app') 
