import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import veeValidatePlugins from './plugins/vee-validate'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import VueTheMask from "vue-the-mask"
import 'vue3-tel-input/dist/vue3-tel-input.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faEye, faEyeSlash)
const VueTelInputOPtions = {
       mode: "International",
       onlyCountries: ["UZ"]
}
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(VueTheMask)
app.use(veeValidatePlugins)
.component('font-awesome-icon', FontAwesomeIcon)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
       app.component(key, component)
}

app.mount('#app')
export default app;