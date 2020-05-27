import VueRouter from 'vue-router'
import Vue from 'vue'

// import Home from '../components/content/Home.vue'
// import narBar from '../components/common/NavBar.vue'

const Home = () => import("../components/content/Home.vue")
const NarBar = () => import('../components/common/NavBar.vue')

Vue.use(VueRouter);

// $router 整個路由組件
// $route 當前活躍的頁面

const routes = [
  {
    path: '/',
    redirect: '/narbar'
  },
  {
    path: '/home',
    component: Home,

    //元數據
    // meta: {
    //   title: '首頁'
    // }

    //子路由
    // children:[
    //   {
    //     path:"news",
    //     component: News,
    //   },
    //   {
    //     path:"message",
    //     component: Message,
    //   }
    // ]
  },
  {
    path: '/narbar',
    component: NarBar,

    deforeEnter: (to, from, next) => {
      //路由獨享守衛
      //還有組建內的守衛
    },
  }
]

const router = new VueRouter({
  routes,
  mode: "history",
  linkActiveClass: "active"
})

//全局守衛
// router.beforeEach((to, from, next)=>{
//   document.title = to.matched[0].meta.title;
//   next();
// })


// router.afterEach((to, from)=>{//以跳轉完不用調用 next()
  
  
// })

//keep-alive include exclude 
// ex: <keep-alive exclude="aaa,bbb"></keep-alive>

export default router