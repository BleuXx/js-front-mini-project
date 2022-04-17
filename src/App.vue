<script>

export default {
  name: "Alcohol",
}

</script>

<template>
  <!--Fonctionne-->
<!--  <img id="logo" src="https://thewebdev.info/wp-content/uploads/2020/09/2btyo-phwyi-1200x800.jpg" height="50" alt="logo"/>-->
  <!--Fonctionne pas ???-->
  <img id="logo" src="assets/alcohol-logo.svg" height="50" alt="logo"/>

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
body{
  display: flex;
  justify-content: center;
}
#logo{
  position: fixed;
  top: 10px;
  left: 10px;
}
nav {
  margin: 60px 0;
}
nav a{
  margin: 0 10px;
}

</style>
