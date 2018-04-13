<template>
  <div id="app">
    <app-header></app-header>
    <app-nav></app-nav>
    <router-view class="full"/>
    <app-footer></app-footer>
  </div>
</template>

<script>
  document.documentElement.style.fontSize = document.documentElement.clientWidth/3.2 + 'px'
  import appHeader from './components/commons/appHeader'
  import appNav from './components/commons//appNav'
  import appFooter from './components/commons/appFooter' 
   

export default {
  name: 'App',
  components:{
    appHeader,appNav,appFooter
  },
  methods: {
  }
}
</script>
<style>
*{
  box-sizing:border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  display: flex;
  flex-direction: column;
}
body,html {
  font-size: .12rem;
  height: 100%;
}
.full{
  flex:1;
  overflow: hidden;
}


</style>
