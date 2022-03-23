<script>
import axios from "axios";

export default {

  data: () =>( {
    requestHandler: axios.create({ baseURL: "http://localhost:3001" }),
  }),

  methods: {
    async addAlcohol() {
      // await this.requestHandler.post("/", {

      // })
      console.log("test")
    },
  },
}
</script>

<template>
  Create
</template>