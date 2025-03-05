<template>
    <div>
      <h1>Mes Préférences</h1>
  
      <div>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Rechercher une news"
          @input="searchNews"
        />
      </div>
  
      <div v-if="filteredNews.length === 0">
        <p>Aucune news ne correspond à votre recherche.</p>
      </div>
  
      <ul>
        <li v-for="news in filteredNews" :key="news.id">
          <a @click="viewNews(news.id)" href="javascript:void(0)">
            <h3>{{ news.title }}</h3>
          </a>
          <p>{{ truncateContent(news.content) }}</p>
          <img v-if="news.image" :src="news.image" alt="Image de la news" width="100" />
          <button @click="deleteNews(news.id)">Supprimer</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { rssService } from '../services/rssService'
  
  export default {
    data() {
      return {
        savedNews: [], 
        searchQuery: '', 
        filteredNews: [] 
      }
    },
    methods: {
      loadSavedNews() {
        this.savedNews = rssService.getSavedNews()
        this.filteredNews = this.savedNews
      },
  
      searchNews() {
        if (this.searchQuery.trim() === '') {
          this.filteredNews = this.savedNews
        } else {
          const query = this.searchQuery.toLowerCase()
          this.filteredNews = this.savedNews.filter(news =>
            news.title.toLowerCase().includes(query) ||
            news.content.toLowerCase().includes(query)
          )
        }
      },
  
      viewNews(newsId) {
        this.$router.push(`/news/${newsId}`)
      },
  
      deleteNews(newsId) {
        rssService.deleteSavedNews(newsId)
        this.loadSavedNews() 
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
  h1 {
    font-size: 2em;
    margin-bottom: 1em;
  }
  
  input {
    padding: 5px;
    margin-bottom: 1em;
    width: 100%;
    max-width: 400px;
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
  
  button {
    margin-left: 10px;
    padding: 5px 10px;
    background-color: #e74c3c;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #c0392b;
  }
  
  img {
    max-width: 100%;
    height: auto;
    margin-top: 0.5em;
  }
  </style>
  