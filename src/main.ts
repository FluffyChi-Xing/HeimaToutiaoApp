import './assets/css/main.css'
import './index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vant/lib/index.css'
import axios from "axios";
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(axios)
app.use(router)

app.mount('#app')
