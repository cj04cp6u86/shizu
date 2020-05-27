<template>
  <div id="app">

    <!-- <nav-bar/>
    <Home/> -->

    <!-- <router-link to="/home" replace active-class="active">首頁</router-link>
    <router-link to="/narbar" replace active-class="active">nav</router-link> -->
    <router-link to="/home" replace >首頁</router-link>
    <router-link to="/narbar" replace >nav</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
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
  },
  methods: {
    // profileClick(){
    //   this.$router.push({
    //     path: "/profile",
    //     query: {
    //       name: 'kobe',
    //       age: 18,
    //       height: 188
    //     }
    //   })
    // }
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
