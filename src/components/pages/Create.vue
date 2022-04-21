<script>
import { addAlcohol } from "../../services/api.js";

export default {
  data: () => ({
    alcohol: {
      name: null,
      type: null,
      description: null,
      estimatedPrice: null,
      alcoholLevel: null,
      image: null,
    },
    message: null,
  }),

  methods: {
    async addAlcohol() {
      const response = await addAlcohol(this.alcohol);
      if (response.status >= 400) {
        this.message = response.data.message;
      } else {
        this.message = "Successfully added";
      }
    },
    onFileChanged(event) {
      const reader = new FileReader();
      const image = event.target.files[0];

      reader.onload = (event_) => {
        this.alcohol.image = event_.target.result;
      };
      reader.readAsDataURL(image);
    },
    showMsg() {
      return this.message !== null ? "w-100 mb-2" : "d-none";
    },
  },
};
</script>

<template>
  <form @submit.prevent="addAlcohol">
    <label for="name">Name</label>
    <input id="name" type="text" v-model="alcohol.name" required />

    <label for="type">Type</label>
    <input id="type" type="text" v-model="alcohol.type" required />

    <label for="desc">Description</label>
    <textarea
      id="desc"
      rows="10"
      cols="22"
      v-model="alcohol.description"
      required
    ></textarea>

    <label for="price">Estimated price</label>
    <input
      id="price"
      type="number"
      step="0.01"
      min="0"
      v-model="alcohol.estimatedPrice"
      required
    />

    <label for="alcohol">Alcohol level</label>
    <input
      id="alcohol"
      type="number"
      step="0.1"
      max="100"
      min="0"
      v-model="alcohol.alcoholLevel"
    />

    <label for="image">Picture</label>
    <input
      id="image"
      type="file"
      accept="image/*"
      name="image"
      @change="onFileChanged"
      required
    />
    <img :src="alcohol.image" />

    <button class="btn btn-outline-primary w-100 my-2" type="submit">
      Add
    </button>
    <p :class="showMsg()">
      <strong>{{ message }}</strong>
    </p>
  </form>

  <router-link class="btn btn-outline-secondary w-100 mb-2" to="/">
    Back
  </router-link>
</template>

<style>
form {
  display: flex;
  flex-direction: column;
  width: 350px;
}

img {
  max-width: 350px;
}
</style>
