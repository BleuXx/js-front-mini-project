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

  <table class="table table-bordered text-break">
    <tbody>
      <tr>
        <th>Type</th>
        <td>{{ alcohol.type }}</td>
      </tr>
      <tr>
        <th>Name</th>
        <td>{{ alcohol.name }}</td>
      </tr>
      <tr>
        <th>Description</th>
        <td class="text-break">{{ alcohol.description }}</td>
      </tr>
      <tr>
        <th>Price</th>
        <td>{{ alcohol.evaluatedPrice }} €</td>
      </tr>
      <tr>
        <th>Alcohol degree</th>
        <td>{{ alcohol.alcoholLevel }}</td>
      </tr>
    </tbody>
  </table>
  <router-link class="btn btn-outline-primary w-100" v-show="show" :to="`/${alcohol.id}/edit`">Edit</router-link>
  <p><strong>{{message}}</strong></p>
  <router-link class="btn btn-outline-danger w-100" :to="`/${alcohol.id}/`" v-on:click="deleteAlcohol">Delete</router-link>

</template>