import './assets/main.css'

import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import Favorites from './pages/Favorites.vue'
import Home from './pages/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/favorites', name: 'Favorites', component: Favorites }
]

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes
})
app.use(router)
app.use(autoAnimatePlugin)

app.mount('#app')
