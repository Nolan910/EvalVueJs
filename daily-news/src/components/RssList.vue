<template>
    <div>
      <h2>Liste des flux RSS</h2>
      <ul>
        <li v-for="feed in feeds" :key="feed.id">
          <span>{{ feed.title }}</span>
          <button @click="viewFeed(feed.id)">Voir les news</button>
          <button @click="deleteFeed(feed.id)">Supprimer</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { rssService } from '../services/rssService'
  
  export default {
    data() {
      return {
        feeds: rssService.getAllFeeds()
      }
    },
    methods: {
      viewFeed(id) {
        this.$router.push(`/rss/${id}`)
      },
  
      deleteFeed(id) {
        rssService.deleteFeed(id)
        this.feeds = rssService.getAllFeeds()
      }
    }
  }
  </script>
  