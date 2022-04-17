<script>
import {getAlcohol, deleteAlcohol, addAlcohol} from "../../services/api.js"

export default {

  data: () => ({
    alcohol: {},
    message:"",
    show: true
  }),

  async mounted() {
    this.alcohol=await getAlcohol(this.$route.params.id)
  },

  methods: {
    async deleteAlcohol() {
      await deleteAlcohol(this.alcohol)
      this.message = "Successfully deleted !"
    },
  },
}
</script>

<template>

  <p>Type : {{ alcohol.type }}</p>
  <p>Name : {{ alcohol.name }}</p>
  <p>Description : {{ alcohol.description }}</p>
  <p>Price : {{ alcohol.evaluatedPrice }} €</p>
  <p>Alcohol degree : {{ alcohol.alcoholLevel }}</p>
  <router-link v-show="show" :to="`/${alcohol.id}/edit`">Edit</router-link>
  <button v-on:click="deleteAlcohol">Delete</button>
  <p><strong>{{message}}</strong></p>

</template>