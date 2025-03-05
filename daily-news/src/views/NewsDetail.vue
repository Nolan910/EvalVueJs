<template>
    <div v-if="news">
      <h1>{{ news.title }}</h1>
      <p v-if="news.content">{{ news.content }}</p>
      
      <div v-if="news.image">
        <img :src="news.image" :alt="news.title" />
      </div>
  
      <p v-else>Aucun contenu disponible pour cette news.</p>
  
      <button @click="goBack">Retour</button>
    </div>
    <div v-else>
      <h1>Page non trouvée</h1>
      <p>La news que vous recherchez n'existe pas ou a été supprimée.</p>
      <button @click="goBack">Retour</button>
    </div>
  </template>
  
  <script>
  import { rssService } from '../services/rssService'
  
  export default {
    data() {
      return {
        news: null,
        error: false
      }
    },
    methods: {
      getNewsDetails() {
        const newsId = this.$route.params.id 
        const savedNews = rssService.getSavedNews()
  
        this.news = savedNews.find(news => news.id === newsId)
  
        if (!this.news) {
          this.error = true
        }
      },
      goBack() {
        this.$router.push('/') 
      }
    },
    mounted() {
      this.getNewsDetails()
    }
  }
  </script>
  
  <style scoped>
  h1 {
    color: #2c3e50;
  }
  
  img {
    max-width: 100%;
    height: auto;
    margin-top: 20px;
    border-radius: 8px;
  }
  
  button {
    background-color: #3498db;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;
  }
  
  button:hover {
    background-color: #2980b9;
  }
  </style>
  