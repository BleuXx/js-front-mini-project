<script>
import {getAlcohol} from "../../services/api.js"

export default {

  data: () => ({
    alcohol: 1,
  }),

  async mounted() {
    this.alcohol=await getAlcohol(this.$route.params.id)
    console.log(this.alcohol)
  }

}
</script>

<template>

  <p>Type : {{ alcohol.type }}</p>
  <p>Name : {{ alcohol.name }}</p>
  <p>Description : {{ alcohol.description }}</p>
  <p>Price : {{ alcohol.evaluatedPrice }} €</p>
  <p>Alcohol degree : {{ alcohol.alcoholLevel }}</p>
  <p><router-link :to="`/${alcohol.id}/edit`">Edit</router-link></p>

</template>