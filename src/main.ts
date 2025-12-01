import './styles/index.css'

import { createApp } from 'vue'

import App from './App.vue'

// mount app
import { PiniaApplication, RouterApplication, I18nApplication, ConfigApplication } from './app/mount'

const app = createApp(App)

app.use(PiniaApplication())
app.use(ConfigApplication())
app.use(I18nApplication())
app.use(RouterApplication())

app.mount('#app')
