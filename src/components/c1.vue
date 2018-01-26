<template>
  <b-container>
    <b-row>
      <h3>Comp <b-badge variant="success">1</b-badge></h3>
    </b-row>
    <b-row>
      <b-table striped hover :items="offerSale"></b-table>
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
  }
}
</script>

<style>

</style>
