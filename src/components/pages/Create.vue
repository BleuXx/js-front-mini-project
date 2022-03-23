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
  <form>
    <p><input type="text" placeholder="nom" required></p>
    <p><input type="text" placeholder="type" required></p>
    <textarea name="message" rows="10" cols="22" placeholder="description" required></textarea>
    <p><input type="text" placeholder="price" required></p>
    <p><input type="text" placeholder="alcohol" required></p>
    <p><input type="file" required></p>
    <button type="submit"> ajouter </button>
  </form>
</template>