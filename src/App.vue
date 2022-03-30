<script>
// Home.vue

export default {
  name: "Alcohol",
  data: () => ({}),
};
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/create">Create</router-link>
    <router-link to="/edit">Edit</router-link>
    <router-link to="/details">Details</router-link>
  </nav>
  <router-view></router-view>
</template>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  margin-top: 60px;
}

a {
  margin: 0 10px;
}
</style>
