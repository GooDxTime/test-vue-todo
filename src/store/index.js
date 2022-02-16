import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    autor:"",
    statusLogin: false,
    listTodo:[{
      id:0,
      title:"Shoping",
      description:"Buy food and household items, also buy a birthday cake and a gift",
      autor:"Admin",
      done: true,
    },
    {
      id:1,
      title:"Cleaning",
      description:"Clean your room, wash the dishes, wipe off the dust.",
      autor:"Admin",
      done: false,
    },
    {
      id:2,
      title:"Learn js",
      description:"Learn JS principles of arrays cycles, optimal algorithms and interaction with objects",
      autor:"Admin",
      done: false,
    },
    {
      id:3,
      title:"Reading",
      description:"Read War and Peace as well as five other classic books",
      autor:"Admin",
      done: false,
    },
    {
      id:4,
      title:"Learn PHP",
      description:"It's best code ever",
      autor:"Crazy",
      done: false,
    },
    {
      id:5,
      title:"Walking",
      description:"Go for a walk in the park with friends, have a coffee, and socialize",
      autor:"Admin",
      done: false,
    }]
  },
  mutations: {
    changeStatus(){
      statusLogin= !statusLogin
    },
    setAutor(state,payload){
      state.autor=payload
    },
    deleteTodo(state,payload){
      state.listTodo = state.listTodo.filter(elem=>elem.id!==payload.id)
    },
    addNewTodoItem(state,payload){
      state.listTodo.push({
        ...payload,
        id:Date.now(),
        autor:state.autor
        })
    },
    changeTodoItem(state,payload){
      state.listTodo = state.listTodo.map((elem,index)=>{
        if(elem.id==payload.id){
          return payload
        }
        return elem
      })
    },
    clearUser(state){
      state.autor="";
      state.statusLogin= false;
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
      alert('You add 2 users in localStorage [name: Admin, password: 12345] and [name: User, password: 54321]')
      localStorage.setItem('Admin','12345')
      localStorage.setItem('User','54321')
    }
  },
  modules: {
  }
})
