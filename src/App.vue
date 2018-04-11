<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    document.documentElement.style.fontSize = document.documentElement.clientWidth/3.2 + 'px'
export default {
  name: 'App'
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
  font-size: 14px;
}
</style>
