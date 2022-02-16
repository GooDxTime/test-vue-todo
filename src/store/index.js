import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    autor:"",
    statusLogin: false,
  },
  mutations: {
    changeStatus(){
      statusLogin= !statusLogin
    },
    setAutor(state,payload){
      state.autor=payload
    }
  },
  actions: {
    getUser({state,commit},payload){
      if(localStorage.getItem(payload.name)==payload.password){
        commit('setAutor',payload.name)
        state.statusLogin=true
        alert('You loggin in system')
      }else{
        state.statusLogin=false
        alert('You write incorrect login or password')
      }
    },
    putUser(){
      alert('You add user in localStorage name: Admin, password: 12345')
      localStorage.setItem('Admin','12345')
    }
  },
  modules: {
  }
})
