<script>
import {addAlcohol} from '../../services/api.js'
export default {

  data: () =>( {
    name:"",
    type:"",
    description:"",
    price:"",
    alcohol:"",
  }),

  methods: {
    async addAlcohol() {
      await addAlcohol(this.name,this.type,this.description,this.price,this.alcohol)
    },


  },
}
</script>

<template>
  <form @submit.prevent="addAlcohol">
    <p><input type="text" placeholder="name" v-model="name" required></p>
    <p><input type="text" placeholder="type" v-model="type" required></p>
    <textarea rows="10" cols="22" placeholder="description" v-model="description" required></textarea>
    <p><input type="number" step="0.01" placeholder="price" v-model="price" required></p>
    <p><input type="number" max="100" min="0" placeholder="alcohol" v-model="alcohol" required></p>
    <!-- <p><input type="file" accept="image/*" required></p> -->
    <button type="submit"> ajouter </button>
  </form>
</template>