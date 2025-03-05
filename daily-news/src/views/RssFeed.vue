<template>
    <div>
      <h2>News du flux : {{ feed.title }}</h2>
      <select v-model="newsLimit">
        <option value="10">10</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="all">Tout</option>
      </select>
  
      <ul>
        <li v-for="news in filteredNews" :key="news.id">
          <a @click="viewNews(news.id)">
            <h3>{{ news.title }}</h3>
          </a>
          <img v-if="news.image" :src="news.image" alt="Image de la news"/>
          <p>{{ news.content }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { rssService } from '../services/rssService'
  
  export default {
    data() {
      return {
        feed: null,
        newsLimit: '10',
      }
    },
    computed: {
      filteredNews() {
        const limit = this.newsLimit === 'all' ? this.feed.news.length : this.newsLimit
        return this.feed.news.slice(0, limit)
      }
    },
    methods: {
      viewNews(newsId) {
        this.$router.push(`/news/${newsId}`)
      }
    },
    mounted() {
      const feedId = this.$route.params.id
      this.feed = rssService.getAllFeeds().find(f => f.id === feedId)
    }
  }
  </script>
  