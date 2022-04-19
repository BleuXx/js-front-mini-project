<script>
import {addAlcohol} from '../../services/api.js'
export default {

  data: () =>( {
    name:"",
    type:"",
    description:"",
    price:"",
    alcohol:"",
    message:"",
    previewImage: undefined
  }),

  methods: {
    async addAlcohol() {
      const res = await addAlcohol(this.name,this.type,this.description,this.price,this.alcohol)
      this.message = res.message
    },
    uploadImage(e) {
      const [image] = e.target.files;
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e => {
        this.previewImage = e.target.result;
      };
    }
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

    <label for="price">Estimated price</label>
    <input id="price" type="number" step="0.01" min="0" placeholder="Estimated price" v-model="price" required>

    <label for="alcohol">Alcohol level</label>
    <input id="alcohol" type="number" step="0.1" max="100" min="0" placeholder="Alcohol degree" v-model="alcohol" required>

    <label for="image">Picture</label>
    <input id="image" type="file" accept="image/*" @change="uploadImage" required>
    
    <button class="btn btn-outline-primary mt-3" type="submit">Add</button>
    <p><strong>{{message}}</strong></p>
    
    <img :src="previewImage" />

  </form>
</template>

<style>
form{
  display: flex;
  flex-direction: column;
  width: 350px;
}
img{
  max-width: 350px;
}
</style>