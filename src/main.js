import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import PrimeVue from 'primevue/config'
import VueToast from 'vue-toast-notification'

import 'vue-toast-notification/dist/theme-sugar.css'

import 'primevue/resources/themes/md-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.min.css'
import 'primeicons/primeicons.css'

import './assets/styles/app.scss'

createApp(App)
  .use(i18n)
  .use(store)
  .use(router)
  .use(PrimeVue, { ripple: true })
  .use(VueToast)
  .mount('#app')
