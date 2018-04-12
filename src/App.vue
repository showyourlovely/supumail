<template>
  <div id="app">
    <app-nav></app-nav>
    <app-banner></app-banner>
    <router-view/>
  </div>
</template>

<script>
  document.documentElement.style.fontSize = document.documentElement.clientWidth/3.2 + 'px'
  import appBanner from './components/commons/appBanner'  
  import appNav from './components/commons//appNav'
export default {
  name: 'App',
  components:{
    appNav,appBanner
  },
  methods: {
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  font-size: .12rem;
}
</style>
