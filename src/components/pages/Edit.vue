<script>
import { getAlcohol, updateAlcohol } from "../../services/api.js";
export default {
  name: "EditPage",
  data: () => ({
    alcohol: {},
    message: null,
  }),

  methods: {
    async getAlcohol() {
      const response = await getAlcohol(this.$route.params);

      if (response.status >= 400) {
        console.log(response.statusText);
        return {
          name: null,
          type: null,
          description: null,
          estimatedPrice: null,
          alcoholLevel: null,
        };
      }

      return response.data;
    },
    async updateAlcohol() {
      const response = await updateAlcohol(this.alcohol);

      if (response.status >= 400) {
        console.log(response.statusText);
        this.message = response.data.message;
        return;
      }

      this.message = "Successfully completed !";
    },
    showMsg() {
      return this.message !== null ? "w-100 mt-1" : "d-none";
    },
  },

  async mounted() {
    this.alcohol = await this.getAlcohol();
  },
};
</script>

<template>
  <form @submit.prevent="updateAlcohol">
    <label for="name">Name</label>
    <input id="name" type="text" v-model="alcohol.name" />

    <label for="type">Type</label>
    <input id="type" type="text" v-model="alcohol.type" />

    <label for="desc">Description</label>
    <textarea
      id="desc"
      rows="10"
      cols="22"
      v-model="alcohol.description"
    ></textarea>

    <label for="price">Estimated price</label>
    <input
      id="price"
      type="number"
      step="0.01"
      min="0"
      v-model="alcohol.estimatedPrice"
    />

    <label for="alcohol">Alcohol level</label>
    <input
      id="alcohol"
      type="number"
      step="0.1"
      max="100"
      min="0"
      name="alcoholLevel"
      v-model="alcohol.alcoholLevel"
    />

    <label for="image">Picture</label>
    <input
      id="image"
      type="file"
      accept="image/*"
      name="image"
      @change="onFileChanged"
    />
    <img :src="alcohol.image" />

    <button class="btn btn-outline-primary w-100 mt-2 mb-1" type="submit">
      Modify
    </button>
    <p :class="showMsg()">
      <strong>{{ message }}</strong>
    </p>
  </form>

  <router-link
    class="btn btn-outline-secondary w-100 mb-2 mt-1"
    :to="`/${alcohol.id}`"
  >
    Back
  </router-link>
</template>

<style>
form {
  display: flex;
  flex-direction: column;
}
</style>
