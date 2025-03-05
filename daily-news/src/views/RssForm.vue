<template>
    <div>
      <h1>Enregistrer un Flux RSS</h1>
      <form @submit.prevent="submitForm">
        <div>
          <label for="title">Titre du Flux</label>
          <input v-model="form.title" id="title" type="text" required />
        </div>
  
        <div>
          <label for="link">Lien du Flux</label>
          <input v-model="form.link" id="link" type="url" required />
        </div>
  
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  </template>
  
  <script>
  import { rssService } from '../services/rssService'
  
  export default {
    data() {
      return {
        form: {
          title: '',
          link: ''
        }
      }
    },
    methods: {
      submitForm() {
        const newFeed = {
          id: Date.now().toString(), 
          title: this.form.title,
          link: this.form.link
        }
  
        rssService.addFeed(newFeed)
  
        this.form.title = ''
        this.form.link = ''
  
        this.$router.push('/')
      }
    }
  }
  </script>
  
  <style scoped>
  form {
    max-width: 500px;
    margin: 0 auto;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #2980b9;
  }
  </style>
  