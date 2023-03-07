import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import 'element-plus/theme-chalk/display.css'
import 'element-plus/theme-chalk/index.css'
import router from './router/index'

import './style.css'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(createPinia().use(piniaPluginPersistedstate))
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
