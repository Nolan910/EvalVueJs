<template>
    <div>
      <h2>Mes News Sauvegardées</h2>
  
      <div v-if="savedNews.length === 0">
        <p>Aucune news sauvegardée pour le moment.</p>
      </div>
      <ul>
        <li v-for="news in savedNews" :key="news.id">
          <a @click="viewNews(news.id)" href="javascript:void(0)">
            <h3>{{ news.title }}</h3>
          </a>
          <p>{{ truncateContent(news.content) }}</p>
          <img v-if="news.image" :src="news.image" alt="Image de la news" width="100" />
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { rssService } from '../services/rssService'
  
  export default {
    data() {
      return {
        savedNews: [] 
      }
    },
    methods: {
      
      loadSavedNews() {
        this.savedNews = rssService.getSavedNews()
      },
  
      viewNews(newsId) {
        this.$router.push(`/news/${newsId}`)
      },
  
      truncateContent(content) {
        return content.length > 100 ? content.slice(0, 100) + '...' : content
      }
    },
    mounted() {
      this.loadSavedNews()
    }
  }
  </script>
  
  <style scoped>
  h2 {
    font-size: 1.5em;
    margin-bottom: 1em;
  }
  
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  li {
    margin-bottom: 1em;
  }
  
  a {
    text-decoration: none;
    color: #2c3e50;
    font-size: 1.2em;
  }
  
  a:hover {
    color: #3498db;
  }
  
  img {
    max-width: 100%;
    height: auto;
    margin-top: 0.5em;
  }
  </style>
  