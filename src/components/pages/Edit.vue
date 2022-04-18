<script>
import { getAlcohol, updateAlcohol } from "../../services/api.js";
export default {

  name: "EditPage",
  data: () => ({
    alcohol: {},
    message:""
  }),

  methods: {
    async updateAlcohol() {
      const res =await updateAlcohol(this.alcohol.id,this.alcohol.name,this.alcohol.type,this.alcohol.description,this.alcohol.evaluatedPrice,this.alcohol.alcoholLevel);
      this.message = res.message
    },
  },

  async mounted() {
    this.alcohol = await getAlcohol(this.$route.params.id);
  },
};
</script>

<template>
  <form @submit.prevent="updateAlcohol">

    <label for="name">Name</label>
    <input id="name" type="text" :placeholder="alcohol.name" v-model="alcohol.name"/>

    <label for="type">Type</label>
    <input id="type" type="text" :placeholder="alcohol.type" v-model="alcohol.type"/>

    <label for="desc">Description</label>
    <textarea id="desc" rows="10" cols="22" :placeholder="alcohol.description" v-model="alcohol.description"></textarea>

    <label for="price">Estimated price</label>
    <input id="price" type="number" step="0.01" min="0" :placeholder="alcohol.evaluatedPrice" v-model="alcohol.evaluatedPrice"/>

    <label for="alcohol">Alcohol level</label>
    <input id="alcohol" type="number" step="0.1" max="100" min="0" name="alcoholLevel" :placeholder="alcohol.alcoholLevel" v-model="alcohol.alcoholLevel"/>


    <router-link :to="`/${alcohol.id}`"><button>Back</button></router-link>
    <button type="submit">Modify</button>

    <p><strong>{{message}}</strong></p>

  </form>
</template>

<style>
form{
  display: flex;
  flex-direction: column;
}
</style>