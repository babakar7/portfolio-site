<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar'
export default {
  name: 'App',
  components:{
    Toolbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:white;
}

body{
  margin: 0;
  height:100vh;
}
</style>
