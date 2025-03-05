<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/preferences">Préférences</router-link></li>
          <li><router-link to="/rss/new">Enregistrer un Flux</router-link></li>
        </ul>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  padding: 20px;
}

header {
  background-color: #2c3e50;
  padding: 10px;
  margin-bottom: 20px;
}

nav ul {
  list-style-type: none;
  padding-left: 0;
}

nav ul li {
  display: inline;
  margin-right: 15px;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

nav ul li a:hover {
  text-decoration: underline;
}

main {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
}
</style>
