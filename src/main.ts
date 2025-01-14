import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// Adiciona conteúdo HTML após a montagem da aplicação
document.body.innerHTML += `
  <div class="content-wrapper">
    <h1>Meu Conteúdo Adicional</h1>
    <p>Este é um conteúdo adicionado via main.ts</p>
  </div>
`
