<template>
  <div id="app">
    <!--Heading/-->
    <router-view/>
  </div>
</template>

<script>
import Heading from './components/Heading'
import SideBarMenu from './components/Profile'

export default {
  name: 'App',
  components: {
    Heading,
    SideBarMenu
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
</style>
