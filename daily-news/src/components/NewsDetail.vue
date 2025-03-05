<template>
    <div>
      <h2>{{ news.title }}</h2>
      <div v-html="news.content"></div>
    </div>
  </template>
  
  <script>
  import { rssService } from '../services/rssService'
  
  export default {
    data() {
      return {
        news: null
      }
    },
    mounted() {
      const newsId = this.$route.params.id
      this.news = rssService.getSavedNews().find(news => news.id === newsId)
      if (!this.news) {
        this.$router.push('/not-found')
      }
    }
  }
  </script>
  