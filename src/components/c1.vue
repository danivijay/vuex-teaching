<template>
  <b-container>
    <b-row>
      <h3>Comp <b-badge variant="success">1</b-badge></h3>
    </b-row>
    <b-row>
      <b-table striped hover :items="offerSale"></b-table>
    </b-row>
    <b-row class="mt-3 mb-3"  align-h="end">
      <b-button variant="primary" @click="reducePrize(5)">
          Reduce Prize
      </b-button>
    </b-row>
  </b-container>
</template>

<script>
export default {
  computed: {
    products () {
      return this.$store.state.products
    },
    offerSale () {
      return this.$store.getters.offerSale
    }
  },
  methods: {
    reducePrize (val) {
      // call mutation directly
      //this.$store.commit('reducePrize', val)

      // call mutaion via actions
      this.$store.dispatch('reducePrize', val)
    }
  }
}
</script>

<style>

</style>
