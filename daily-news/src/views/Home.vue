<template>
    <div>
      <h1>DailyNews</h1>
  
      <div>
        <button @click="goToRssForm">Enregistrer un nouveau flux RSS</button>
      </div>
  
      <h2>Liste des flux RSS</h2>
      <div v-if="feeds.length === 0">
        <p>Aucun flux RSS enregistré pour le moment.</p>
      </div>
      <ul>
        <li v-for="feed in feeds" :key="feed.id">
          <span>{{ feed.title }}</span>
          <button @click="goToRssFeed(feed.id)">Voir les news</button>
          <button @click="deleteFeed(feed.id)">Supprimer</button>
        </li>
      </ul>
  
      <div>
        <button @click="goToPreferences">Voir mes préférences</button>
      </div>
    </div>
  </template>
  
  <script>
  import { rssService } from '../services/rssService'
  
  export default {
    data() {
      return {
        feeds: [] 
      }
    },
    methods: {
      loadFeeds() {
        this.feeds = rssService.getAllFeeds()
      },
  
      goToRssForm() {
        this.$router.push('/rss/new') 
      },
  
      goToRssFeed(feedId) {
        this.$router.push(`/rss/${feedId}`)
      },
  
      deleteFeed(feedId) {
        rssService.deleteFeed(feedId)
        this.loadFeeds() 
      },
  
      goToPreferences() {
        this.$router.push('/preferences')
      }
    },
    mounted() {
    
      this.loadFeeds()
    }
  }
  </script>
  
  <style scoped>
  h1 {
    font-size: 2em;
    margin-bottom: 1em;
  }
  
  h2 {
    font-size: 1.5em;
    margin-top: 2em;
  }
  
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  li {
    margin-bottom: 1em;
  }
  
  button {
    margin-left: 10px;
    padding: 5px 10px;
    background-color: #3498db;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #2980b9;
  }
  
  div {
    margin-top: 1em;
  }
  </style>
  