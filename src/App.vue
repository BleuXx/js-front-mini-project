<script>
// // Home.vue
// export default {
//   computed: {
//     username() {
//       // We will see what `params` is shortly
//       return this.$route.params.username
//     },
//   },
//   methods: {
//     goToDashboard() {
//       if (isAuthenticated) {
//         this.$router.push('/dashboard')
//       } else {
//         this.$router.push('/login')
//       }
//     },
//   },
// }

</script>

<template>
  <p>
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </p>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
