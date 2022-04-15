<script>
// Home.vue



export default {

  name: "Alcohol",

  data: () =>( {
  }),
}

</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/create">Create</router-link>
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
  margin: 60px 0;
}
a{
  margin: 0 10px;
}
#app{
  display: flex;
  flex-direction: column;
  align-content: center;
}
</style>
