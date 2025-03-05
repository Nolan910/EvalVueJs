import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Preferences from '../views/Preferences.vue'
import RssForm from '../views/RssForm.vue' 
import RssFeed from '../views/RssFeed.vue' 
import NewsDetail from '../views/NewsDetail.vue' 

const routes = [
  { path: '/', component: Home },                  
  { path: '/preferences', component: Preferences }, 
  { path: '/rss/new', component: RssForm },         
  { path: '/rss/:id', component: RssFeed },         
  { path: '/news/:id', component: NewsDetail },    
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
