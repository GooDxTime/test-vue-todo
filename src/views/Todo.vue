<template>
  <div>
    <div class="modal-edit" id="modal-edit" v-if="editDialog" @click="closeDialog($event)">
      <div class="modal-edit__card">
        <h4 class="modal-edit__card-header">Edit todo</h4>
        <form class="d-flex todo__container-form">
            <div class="d-flex todo__form-input-container dialog-input">
              <label class="todo__form-label">Title:</label>
              <input class="todo__form-input"  type="text" name="" id="" placeholder="title todo" v-model="editTodo.title">
            </div>
            <div class="d-flex todo__form-input-container dialog-input">
              <label class="todo__form-label">Description:</label>
              <textarea class="todo__form-textarea dialog-textarea" name="" id=""  placeholder="Describe your todo..." v-model="editTodo.description"></textarea>
            </div>
            <div class="d-flex dialog-input dialog-input-status">
              <label class="todo__form-label">Status:</label>
              <input class="todo__form-checkbox" type="checkbox" v-model="editTodo.done" name="status" id="status">
              <label class="todo__form-label todo__form-label_status" for="status">{{doneStatus}}</label>
            </div>
            <button class="btn" @click.prevent.stop="changeTodo(editTodo)">Change todo</button>
          </form>
      </div>
    </div>
    <div class="main-bg">
    </div>
    <div class="container todo">
     <img src="@/assets/logo.svg" alt="logo" class="todo__logo">
      <div class="todo__container">
        <div class="logout-link">
          <button class="btn " @click="logout()">Logout</button>
        </div>
        <h3 class="todo__container-header">Thank you {{autor}}! your TODO</h3>
        <h4 class="todo__container-small-header">You can Add new todo</h4>
          <form class="d-flex todo__container-form todo__container-form-border">
            <div class="d-flex todo__form-input-container">
              <label class="todo__form-label">Title:</label>
              <input class="todo__form-input" :class="{'error-valid':inValid.title}" type="text" name="" id="" placeholder="title todo" v-model="newTodo.title">
              <span class="error-massage" v-show="inValid.title">
                &times; enter сompany name
              </span>
            </div>
            <div class="d-flex todo__form-input-container">
              <label class="todo__form-label">Description:</label>
              <textarea :class="{'error-valid':inValid.description}" class="todo__form-textarea" name="" id=""   placeholder="Describe your todo..." v-model="newTodo.description"></textarea>
              <span class="error-massage" v-show="inValid.description">
                &times; enter сompany name
              </span>
            </div>
            <button class="btn todo__container-form-btn" @click.prevent="addNewTodo(newTodo)">Add todo</button>
          </form>
        <h4 class="todo__container-small-header">You have {{currentListTodo.length}} todo</h4>
        <ul class="todo__list">
          <li class="todo__list-item">
            <strong class="todo__list-item-title">Title</strong><strong class="todo__list-item-descr">Description</strong><strong class="todo__list-item-status">Status</strong><div class="todo__list-item-buttons"></div>
          </li>
          <li class="todo__list-item" v-for="item in currentListTodo" :key="item.id">
            <strong class="todo__list-item-title">{{item.title}}</strong><p class="todo__list-item-descr">{{item.description}}</p><p class="todo__list-item-status">{{item.done?'Done':'Not done'}}</p><div class="todo__list-item-buttons"><button class="btn btn-edit" @click.prevent="editTodos(item)">Edit</button><button class="btn btn-delete" @click.prevent="deleteTodo(item)">Delete</button></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  beforeCreate(){
    if(!this.$store.state.autor){
      this.$router.push('/login')
    }
  },
  data:()=>({
    editDialog:false,
    editTodo:{
      id:0,
      title:"",
      description:"",
      autor:"",
      done: false,
    },
    newTodo:{
      id:0,
      title:"",
      description:"",
      autor:"",
      done: false,
    },
    inValid:{
      title:false,
      password:false
    }
  }),
  computed:{
    ...mapState(['autor','listTodo']),
    currentListTodo(){
      return this.listTodo.filter(elem=>elem.autor === this.autor)
    },
    doneStatus(){
      return this.editTodo.done?'Done':'Not done'
    }
  },
  methods:{
    ...mapMutations([
      'deleteTodo','changeTodoItem','clearUser','addNewTodoItem'
    ]),
    addNewTodo(payload){
        this.inValid.title=false;
        this.inValid.description=false;
      if(!payload.title&&!payload.description){
        this.inValid.title=true;
        this.inValid.description=true;
        return
      }else if(!payload.title){
        this.inValid.title=true;
        return
      }else if(!payload.description){
        this.inValid.description=true;
        return
      }

      this.addNewTodoItem(payload)
      this.resetNewTodo()
    },
    logout(){
      this.clearUser()
      this.$router.push('/login')
    },
    resetNewTodo(){
      this.newTodo.title="";
      this.newTodo.description="";
    },
    editTodos(payload){
      this.editTodo={...payload}
      this.editDialog=true
    },
    changeTodo(payload){
      this.changeTodoItem(payload)
      this.editDialog=false
    },
    closeDialog(event){
      if(event.target.id=='modal-edit'){
        this.editDialog=false
      }
    }
  }
}
</script>

<style>
@import url("../assets/todo.css");
</style>