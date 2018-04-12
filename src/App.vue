<template>
  <div id="app">
    <app-header></app-header>
    <app-nav></app-nav>
    <app-banner></app-banner>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
  document.documentElement.style.fontSize = document.documentElement.clientWidth/3.2 + 'px'
  import appHeader from './components/commons/appHeader'
  import appNav from './components/commons//appNav'
  import appBanner from './components/commons/appBanner' 
  import appFooter from './components/commons/appFooter' 
   

export default {
  name: 'App',
  components:{
    appHeader,appNav,appBanner,appFooter
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
  height: 100%;
  position: relative;
}
body {
  font-size: .12rem;
}
html{
  height: 100%;
  position: relative;
}
app-footer{
  position: absolute;
  bottom: 0;
}

</style>
