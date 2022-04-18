<script>
import {getAlcohols} from "../../services/api.js"

  export default {

    data: () => ({
      alcohols: [],
      collectionValue:0.0
    }),

    async mounted() {
      this.alcohols=await getAlcohols()
      this.alcohols.forEach(o => {
        this.collectionValue += o.evaluatedPrice
      })
    }

  }
</script>

<template>
  <p>Estimated value of the collection : {{collectionValue}}</p>
  <table class="table table-striped table-bordered text-center">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
        <th>Alcohol degree</th>
        <th>Evaluated price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="alcohol in alcohols">
        <td class="align-middle">{{alcohol.name}}</td>
        <td class="align-middle">{{alcohol.type}}</td>
        <td class="align-middle text-break">{{alcohol.description}}</td>
        <td class="align-middle">{{alcohol.alcoholLevel}}</td>
        <td class="align-middle">{{alcohol.evaluatedPrice}}</td>
        <td class="align-middle"><router-link class="btn btn-outline-primary" :to="`/${alcohol.id}`">Details</router-link></td>
      </tr>
    </tbody>
  </table>
</template>
