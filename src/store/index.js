import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.store({
  state:{
    counter: 1000
  },
  //更新數值只在mutations做
  mutations: {
    //同步操作
    increment(state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    add(state, index){
      state.counter+=index;
      //組建使用 this.$store.commit("add",index)
      //特殊提交
      // this.$store.commit({
      //  type: "add",
      //  index
      // })

      //物件增加屬性
      // Vue.set(物件, "key", value)
      //刪除屬性
      // Vue.delete(物件, "key")
    }
  },
  actions: {
    //異步操作
  },
  getters: {
    //類似計算屬性
    add(state){
      return state.counter + state.counter;
    },
    tadd(state, getters){//使用getter函式
      return getters.add
    },
    foo(state){// 有參數的getter函式
      return (index)=>{
        return state.counter * index;
      }
    }
  },
  modules: {

  }
})

// 以this.$store.commit('函式名') 操作更改數值

export default store