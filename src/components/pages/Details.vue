<script>

import {getAlcohol} from "../../services/api.js"


export default {

  data: () =>( {

  }),

  methods: {
    async getAlcohol(id) {
      const alcohol = await getAlcohol(id)
    },

  },
}
</script>

<template>

</template>