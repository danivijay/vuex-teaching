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
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {
  computed: {
    products () {
      return this.$store.state.products
    },
    ...mapGetters([
      'offerSale'
    ])
  },
  methods: {
    ...mapActions([
      'reducePrize'
    ])
  }
}
</script>

<style>

</style>
