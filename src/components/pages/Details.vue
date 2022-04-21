<script>
import { deleteAlcohol, getAlcohol } from "../../services/api.js";

export default {
  data: () => ({
    alcohol: {},
    message: null,
    redirect: "/",
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
    async deleteAlcohol() {
      const response = await deleteAlcohol(this.alcohol);

      if (response.status >= 400) {
        console.log(response.statusText);
        this.message = response.data.message;
        return;
      }

      this.redirect = `/${this.alcohol.id}`;
    },
    showMsg() {
      return this.message !== null ? "w-100 my-2" : "d-none";
    },
  },

  async mounted() {
    this.alcohol = await this.getAlcohol();
  },
};
</script>

<template>
  <div id="alcohol-wrapper" class="my-3">
    <table class="table table-bordered text-break">
      <tbody>
        <tr>
          <th>Name</th>
          <td>{{ alcohol.name }}</td>
        </tr>
        <tr>
          <th>Type</th>
          <td>{{ alcohol.type }}</td>
        </tr>
        <tr>
          <th>Description</th>
          <td class="text-break">{{ alcohol.description }}</td>
        </tr>
        <tr>
          <th>Estimated price</th>
          <td>{{ alcohol.estimatedPrice }} €</td>
        </tr>
        <tr>
          <th>Alcohol level</th>
          <td>{{ alcohol.alcoholLevel }} %</td>
        </tr>
      </tbody>
    </table>

    <img :src="alcohol.image" />
  </div>

  <router-link
    class="btn btn-outline-primary w-100 mt-2"
    :to="`/${alcohol.id}/edit`"
  >
    Edit
  </router-link>

  <router-link
    class="btn btn-outline-danger w-100 my-2"
    :to="redirect"
    v-on:click="deleteAlcohol"
  >
    Delete
  </router-link>
  <p :class="showMsg()">
    <strong>{{ message }}</strong>
  </p>

  <router-link class="btn btn-outline-secondary w-100 mb-2" to="/">
    Back
  </router-link>
</template>

<style>
#alcohol-wrapper {
  display: flex;
  flex-direction: column;
  width: 350px;
}

img {
  max-width: 350px;
}
</style>
