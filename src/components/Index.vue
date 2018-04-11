<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <app-banner></app-banner>
  </div>
</template>

<script>
import appBanner from './commons/appBanner'
export default {
  name: 'Index',
  data () {
    return {
      msg: '这是index'
    }
  },
  components: {
    appBanner,
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

</style>
