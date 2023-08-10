import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config' //ljn
import 'primevue/resources/themes/lara-light-indigo/theme.css' //ljn
// import 'primevue/resources/themes/md-light-indigo/theme.css' //ljn
// import 'primevue/resources/themes/bootstrap4-light-blue/theme.css' //ljn

// import 'primevue/resources/primevue.min.css' //---ljn
import 'primeicons/primeicons.css' //ljn
import InputText from 'primevue/inputtext' //ljn
import Button from 'primevue/button' //ljn
import Toast from 'primevue/toast' //ljn
import ToastService from 'primevue/toastservice' //ljn

const app = createApp(App)

app.use(PrimeVue, { ripple: true }) //ljn
// app.use(PrimeVue) //ljn
app.use(ToastService) //ljn
app.component('InputTextLibl', InputText) //ljn
app.component('ButtonLibl', Button) //ljn
app.component('ToastLibl', Toast) //ljn

app.use(createPinia())
app.use(router)

app.mount('#app')
