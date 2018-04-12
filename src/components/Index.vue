<template>
  <div class="hello">
    <app-header></app-header>
    <app-banner></app-banner>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appBanner from './commons/appBanner'
import appHeader from './commons/appHeader'
import appFooter from './commons/appFooter'

export default {
  name: 'Index',
  data () {
    return {
      msg: '这是index'
    }
  },
  components: {
    appBanner,appHeader,appFooter
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

</style>
