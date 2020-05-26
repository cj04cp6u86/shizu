<template>
  <div id="app">
    <nav-bar/>
    <Home/>
  </div>
</template>

<script>
import Home from "./components/content/Home"
import NavBar from './components/common/NavBar'

export default {
  name: 'App',
  components: {
    Home,
    NavBar
  }
}
</script>

<style>
  body{    
    margin:0px;
    padding:0px;
    background:#fff url( './assets/home/shizu.jpg' ) center center fixed no-repeat;    
    background-size: 100%, 100%;
  }
</style>
