<script>

export default {
  name: "Alcohol",
}

</script>

<template>

  <nav class="nav d-flex justify-content-center my-4">
    <img id="logo" src="./assets/alcohol-logo.svg" height="60" alt="logo"/>
    <router-link class="nav-link" to="/">Home</router-link>
    <router-link class="nav-link" to="/create">Create</router-link>
  </nav>
  <router-view></router-view>
</template>

<style>
*{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  display: flex;
  justify-content: center;
}
#app{
  max-width: 75%;
}
#logo{
  position: fixed;
  top: 15px;
  left: 20px;
}
</style>
