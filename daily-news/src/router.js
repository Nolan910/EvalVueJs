import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Preferences from '../views/Preferences.vue'
import RssForm from '../views/RssForm.vue'
import RssFeed from '../views/RssFeed.vue'
import NewsDetail from '../views/NewsDetail.vue'

const routes = [
  {
    path: '/',  
    name: 'Home',
    component: Home
  },
  {
    path: '/preferences',  
    name: 'Preferences',
    component: Preferences
  },
  {
    path: '/rss/new',  
    name: 'RssForm',
    component: RssForm
  },
  {
    path: '/rss/:id',  
    name: 'RssFeed',
    component: RssFeed,
    props: true  
  },
  {
    path: '/news/:id',  
    name: 'NewsDetail',
    component: NewsDetail,
    props: true  
  },
  {
    path: '/:pathMatch(.*)*',  
    name: 'NotFound',
    component: {
      template: '<h1>Page non trouvée</h1>'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),  
  routes  
})

export default router
