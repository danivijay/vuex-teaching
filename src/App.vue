<template>
  <div id="app">
    <c1></c1>
    <c2></c2>
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

    }
  }
}
</script>

<style>

</style>
