<script>
import axios from "axios";

export default {

  data: () =>( {
    requestHandler: axios.create({ baseURL: "http://172.31.247.131:3001" }),
    name:"",
    type:"",
    description:"",
    price:"",
    alcohol:"",
  }),

  methods: {
    async addAlcohol() {
      await this.requestHandler.post("/", {
          
      })
      console.log(this.name)
    },


  },
}
</script>

<template>
  <form @submit.prevent="addAlcohol">
    <p><input type="text" placeholder="name" v-model="name" required></p>
    <p><input type="text" placeholder="type" v-model="type" required></p>
    <textarea rows="10" cols="22" placeholder="description" v-model="description" required></textarea>
    <p><input type="text" placeholder="price" v-model="price" required></p>
    <p><input type="text" placeholder="alcohol" v-model="alcohol" required></p>
    <p><input type="file" accept="image/*" required></p>
    <button type="submit"> ajouter </button>
  </form>
</template>