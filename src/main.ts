import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

// mount app
import { PiniaApplition } from './app/mount'

const app = createApp(App)

app.use(PiniaApplition())

app.use(router)

app.mount('#app')
