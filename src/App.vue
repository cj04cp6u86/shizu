<template>
  <div id="app">
    <!-- <nav-bar/>
    <Home/> -->

    <!-- <router-link to="/home" replace active-class="active">首頁</router-link>
    <router-link to="/narbar" replace active-class="active">nav</router-link>
    <router-link to="/home" replace >首頁</router-link>
    <router-link to="/narbar" replace >nav</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive> -->

    <!-- <div class="top-bar">
      <div class="left-menu">
        <ul class="menu-icon">
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <ul class='nav'>
          <li><a href="">關於喜日</a></li>
          <li><a href="">3D列印</a></li>
          <li><a href="">客製化</a></li>
          <li><a href="">服務支持</a></li>
          <li><a href="">聯繫喜日</a></li>
          <li>
            <a href=""><i class="fas fa-search"></i></a>
            <span>搜索 ShiZu.com</span>
            </li>
        </ul>
      </div>
      <div class="logo">
        <a href="">喜日ShiZu</a>
      </div>
      <div class="user-info">
        <a href="">
          <i class="fas fa-uesr"></i>
        </a>
      </div>
    </div> -->
    
    <div class="main-navigation">
      <div class="navbar-wrapper clearfix">
        <!-- logo圖標 -->
        <div class="navber-header-wrapper clearfix">
          <a class="" href="javascript:;"><img class="logo-img" src="./assets/home/logo.jpg" alt="喜日設計 3D列印"></a>
        </div>
        <div class="navbar-menu-wrapper clearfix">
          <ul class="text-primary-color clearfix">
            <li class="nav-dropdown">
              <a href="">關於喜日<i class="fas fa-angle-down"></i></span>
                <ul>
                  <li><a href=""></a></li>
                  <li><a href=""></a></li>
                </ul>
              </a>
            </li>
            <li class="nav-dropdown">
              <a href="">3D列印<i class="fas fa-angle-down"></i></span>
                <ul>
                  <li><a href=""></a></li>
                  <li><a href=""></a></li>
                </ul>
              </a>
            </li>
            <li class="nav-dropdown">
              <a href="">客製化禮品<i class="fas fa-angle-down"></i></span>
                <ul>
                  <li><a href=""></a></li>
                  <li><a href=""></a></li>
                </ul>
              </a>
            </li>
            <li class="nav-dropdown">
              <a href="">產品設計<i class="fas fa-angle-down"></i></span>
                <ul>
                  <li><a href=""></a></li>
                  <li><a href=""></a></li>
                </ul>
              </a>
            </li>
            <li class="nav-dropdown">
              <a href="">模型製作<i class="fas fa-angle-down"></i></span>
                <ul>
                  <li><a href=""></a></li>
                  <li><a href=""></a></li>
                </ul>
              </a>
            </li>
            <li class="nav-dropdown">
              <a href="">我有問題<span class="caret"></span>
                <ul>
                  <li><a href=""></a></li>
                  <li><a href=""></a></li>
                </ul>
              </a>
            </li>
          </ul>
        </div>        
      </div>
    </div>
  </div>
</template>

<script>
import Home from "./components/content/Home";
import NavBar from "./components/common/NavBar";

export default {
  name: "App",
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
};
</script>

<style lang='less'>
@import "./fa/css/all.min.css";
@import "./css/main.less";
</style>
