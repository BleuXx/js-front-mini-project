<script>
import {addAlcohol} from '../../services/api.js'
export default {

  data: () =>( {
    name:"",
    type:"",
    description:"",
    price:"",
    alcohol:"",
    message:""
  }),

  methods: {
    async addAlcohol() {
      const res = await addAlcohol(this.name,this.type,this.description,this.price,this.alcohol)
      this.message = res.message
    },
  },
}
</script>

<template>
  <form @submit.prevent="addAlcohol">

    <label for="name">Name</label>
    <input id="name" type="text" placeholder="Name" v-model="name" required>

    <label for="type">Type</label>
    <input id="type" type="text" placeholder="Type" v-model="type" required>

    <label for="desc">Description</label>
    <textarea id="desc" rows="10" cols="22" placeholder="Description" v-model="description" required></textarea>

    <label for="price">Price</label>
    <input id="price" type="number" step="0.01" min="0" placeholder="Price" v-model="price" required>

    <label for="alcohol">Alcohol level</label>
    <input id="alcohol" type="number" step="0.1" max="100" min="0" placeholder="Alcohol degree" v-model="alcohol" required>

    <!-- <input type="file" accept="image/*" required> -->
    <button type="submit">Add</button>
    <p><strong>{{message}}</strong></p>

  </form>
</template>

<style>
form{
  display: flex;
  flex-direction: column;
}
</style>