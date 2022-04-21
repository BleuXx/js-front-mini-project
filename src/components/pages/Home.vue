<script>
import { deleteAlcohol, getAlcohols, getStats } from "../../services/api.js";

export default {
  data: () => ({
    alcohols: [],
    collectionValue: 0,
    meanValue: 0,
  }),
  methods: {
    async getAlcohols() {
      const response = await getAlcohols();

      if (response.status >= 400) {
        console.log(response.statusText);
        return;
      }

      return response.data;
    },
    async deleteAlcohol(alcohol) {
      const response = await deleteAlcohol(alcohol);

      if (response.status >= 400) {
        console.log(response.statusText);
        return;
      }

      this.alcohols = await this.getAlcohols();

      const stats = await this.getStats();

      this.collectionValue = stats.collectionValue;
      this.meanValue = stats.meanValue;
    },
    async getStats() {
      const response = await getStats();

      if (response.status >= 400) {
        console.log(response.statusText);
        const nbAlcoholDrinks = this.alcohols.length;
        let collectionValue = 0.0;
        for (const alcohol of this.alcohols) {
          collectionValue += alcohol.estimatedPrice;
        }

        return {
          total: nbAlcoholDrinks,
          collectionValue,
          meanValue:
            nbAlcoholDrinks > 0 ? collectionValue / nbAlcoholDrinks : 0,
        };
      }

      return response.data;
    },
    filterAlcohols() {},
  },

  async mounted() {
    this.alcohols = await this.getAlcohols();
    const stats = await this.getStats();

    this.collectionValue = stats.collectionValue;
    this.meanValue = stats.meanValue;
  },
};
</script>

<template>
  <p>Number of items : {{ alcohols.length }}</p>
  <p>Estimated value of the collection : {{ collectionValue }}</p>
  <p>Mean of the collection : {{ meanValue }}</p>

  <form class="form-outline w-100" @submit.prevent="filterAlcohols">
    <label for="search-name">Name</label>
    <input
      id="search-name"
      class="form-control"
      type="search"
      placeholder="Type query"
      aria-label="Search"
    />

    <button class="btn btn-outline-primary w-100 my-2" type="submit">
      Filter
    </button>
  </form>

  <table class="table table-striped table-bordered text-center">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
        <th>Estimated price</th>
        <th>Alcohol level</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="alcohol in alcohols">
        <td class="align-middle">{{ alcohol.name }}</td>
        <td class="align-middle">{{ alcohol.type }}</td>
        <td class="align-middle text-break">{{ alcohol.description }}</td>
        <td class="align-middle">{{ alcohol.estimatedPrice }} €</td>
        <td class="align-middle">{{ alcohol.alcoholLevel }} %</td>
        <td class="align-middle">
          <router-link class="btn btn-outline-info" :to="`/${alcohol.id}`">
            Details
          </router-link>
          <router-link
            class="btn btn-outline-primary"
            :to="`/${alcohol.id}/edit`"
          >
            Edit
          </router-link>
          <button
            class="btn btn-outline-danger"
            v-on:click="deleteAlcohol(alcohol)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>
router-link.btn {
  margin: 10px;
}
</style>
