<template>
  <div id="app">
    <c1 :products="products"></c1>
    <c2 :products="products"></c2>
  </div>
</template>

<script>
import c1 from './components/c1.vue'
import c2 from './components/c2.vue'

export default {
  components: {
    c1,
    c2
  },
  name: 'app',
  data () {
    return {
      products: [
        { name: 'hyundai', prize: '24' },
        { name: 'audi', prize: '28' },
        { name: 'bmw', prize: '29' }
      ]
    }
  }
}
</script>

<style>

</style>
