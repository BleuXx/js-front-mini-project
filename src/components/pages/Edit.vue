<script>
import { getAlcohol, updateAlcohol } from "../../services/api.js";

export default {
  name: "EditPage",
  data: () => ({
    alcohol: {},
  }),
  methods: {
    async updateAlcohol() {
      await updateAlcohol();
    },
  },
  async mounted() {
    this.alcohol = await getAlcohol(this.$route.params.id);
  },
};
</script>

<template>
  <form action="get">
    <div>
      <label for="name">Nom</label>
      <input
        type="text"
        name="name"
        :placeholder="alcohol.name"
        id="name"
        required
      />
    </div>

    <div>
      <label for="type">Type</label>
      <input
        type="text"
        name="type"
        :placeholder="alcohol.type"
        id="type"
        required
      />
    </div>

    <div>
      <label for="type">Description</label>
      <textarea
        name="description"
        :placeholder="alcohol.description"
        rows="10"
        cols="22"
        required
      ></textarea>
    </div>

    <div>
      <label for="type">Evaluated price</label>
      <input
        type="text"
        name="evaluatedPrice"
        :placeholder="alcohol.evaluatedPrice"
        required
      />
    </div>

    <div>
      <label for="type">Alcohol level</label>
      <input
        type="text"
        name="alcoholLevel"
        :placeholder="alcohol.alcoholLevel"
        required
      />
    </div>

    <button type="submit">Ajouter</button>
  </form>
</template>
