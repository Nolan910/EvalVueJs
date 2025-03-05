<template>
    <div>
      <h2>{{ editMode ? 'Modifier un flux RSS' : 'Enregistrer un flux RSS' }}</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="title">Titre :</label>
          <input v-model="rss.title" id="title" type="text" required />
        </div>
        <div>
          <label for="link">Lien :</label>
          <input v-model="rss.link" id="link" type="url" required />
        </div>
        <button type="submit">{{ editMode ? 'Mettre à jour' : 'Ajouter' }}</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { rssService } from '../services/rssService'
  
  export default {
    data() {
      return {
        rss: {
          id: null,
          title: '',
          link: ''
        },
        editMode: false
      }
    },
    methods: {
      handleSubmit() {
        if (this.editMode) {
          rssService.updateFeed(this.rss)
        } else {
          this.rss.id = Date.now().toString()
          rssService.addFeed(this.rss)
        }
        this.$router.push('/')
      },
  
      loadFeed(id) {
        const feed = rssService.getAllFeeds().find(f => f.id === id)
        if (feed) {
          this.rss = { ...feed }
          this.editMode = true
        }
      }
    },
    mounted() {
      const feedId = this.$route.params.id
      if (feedId) {
        this.loadFeed(feedId)
      }
    }
  }
  </script>
  