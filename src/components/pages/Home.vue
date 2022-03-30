<script>
import {getAlcohol, getAlcohols} from "../../services/api.js"

  export default {

    data: () =>( {
      alcohols: []
    }),

    methods: {
      async getAlcohols() {
        this.alcohols = await getAlcohols()
      },

    },
  }
</script>

<template>
  <div v-for="alcohols"></div>
</template>