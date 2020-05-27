<template>
  <div id="home-page">
    <h2>HOME</h2>

    <!-- <router-link to="/home/news">新聞</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-link></router-link> -->

    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: "Home",
}
</script>

<style>
  #home-page{
    font-size:60px;
    color:rgb(30, 226, 72);
  }
</style>