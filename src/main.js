import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
//设置element-plus默认为中文模式
import locale from 'element-plus/lib/locale/lang/zh-cn'
import App from './App.vue'
import router from './router'






// createApp(App).mount('#app')
const app = createApp(App)
app.use(ElementPlus, { locale })
app.use(router)
app.mount('#app')
