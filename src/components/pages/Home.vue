<script>
import {getAlcohols} from "../../services/api.js"

  export default {

    data: () => ({
      alcohols: []
    }),

    methods:{
      async getAlcohols() {
        console.log(await getAlcohols())
        return await getAlcohols()
      }
    },

    async mounted() {
      this.alcohols=await getAlcohols()
    }

  }
</script>

<template>
  <table>
    <tr><th>Type</th><th>Name</th><th>Description</th><th>Price</th><th>Alcohol degree</th></tr>
    <tr v-for="alcohol in alcohols"><td>{{alcohol.type}}</td><td>{{alcohol.name}}</td><td>{{alcohol.description}}</td><td>{{alcohol.evaluatedPrice}}</td><td>{{alcohol.alcoholLevel}}</td></tr>
  </table>
</template>

<style>
  table, th,td{
    border: black 1px solid;
  }
</style>
