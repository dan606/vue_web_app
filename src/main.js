import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'


// import axios from 'axios'
// axios.get("http://localhost:3000/userss")
// .then(
//     response => console.log(response)
// )
// .catch(
//     error => console.log(error)
// )

const app = createApp(App)

app.config.globalProperties.foo = 'bar'
app.use(i18n)
app.use(router)
app.mount('#app')