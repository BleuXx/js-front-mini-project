<script>
import axios from "axios";

export default {

  data: () =>( {
    requestHandler: axios.create({ baseURL: "http://172.31.247.131:3001" }),
  }),

  methods: {
    async addAlcohol() {
      await this.requestHandler.get("/", {

      })
      console.log(this.name)
    },


  },
}
</script>

<template>
  
</template>