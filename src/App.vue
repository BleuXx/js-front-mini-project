<script>
// Collection.vue
import axios from "axios";
// import Collection from "components/Collection.vue";
// import Create from "components/Create.vue";
// import Details from "components/Details.vue";
// import Edit from "components/Edit.vue";

export default {

  data: () =>( {
    requestHandler: axios.create({ baseURL: "http://localhost:3001" }),
  }),
}

</script>

<template>
  <nav>
    <router-link to="/">See collection</router-link>
    <router-link to="/create">Create</router-link>
    <router-link to="/edit">Edit</router-link>
    <router-link to="/details">Details</router-link>
  </nav>
  <router-view></router-view>
</template>

<style>
*{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
nav {
  margin-top: 60px;
}
a{
  margin: 0 10px;
}
</style>
