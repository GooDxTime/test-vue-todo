<template>
  <div>
    <div class="modal-edit" id="modal-edit" v-if="editDialog" @click="closeDialog($event)">
      <div class="modal-edit__card">
        <h4 class="modal-edit__card-header">Edit todo</h4>
        <form class="d-flex todo__container-form">
            <div class="d-flex todo__form-input-container">
              <label class="todo__form-label">Title:</label>
              <input class="todo__form-input"  type="text" name="" id="" placeholder="title todo" v-model="editTodo.title">
            </div>
            <div class="d-flex todo__form-input-container">
              <label class="todo__form-label">Description:</label>
              <textarea class="todo__form-textarea" name="" id=""  placeholder="Describe your todo..." v-model="editTodo.description"></textarea>
            </div>
            <button class="btn" @click.prevent="changeTodo(editTodo)">Change todo</button>
          </form>
      </div>
    </div>
    <div class="main-bg">
    </div>
    <div class="container todo">
      <img src="@/assets/logo.svg" alt="logo" class="todo__logo">
      <div class="todo__container">
        <h3 class="todo__container-header">Thank you {{autor}}! your TODO</h3>
        <h4 class="todo__container-small-header">You can Add new todo</h4>
          <form class="d-flex todo__container-form">
            <div class="d-flex todo__form-input-container">
              <label class="todo__form-label">Title:</label>
              <input class="todo__form-input"  type="text" name="" id="" placeholder="title todo" v-model="newTodo.title">
            </div>
            <div class="d-flex todo__form-input-container">
              <label class="todo__form-label">Description:</label>
              <textarea class="todo__form-textarea" name="" id="" cols="20" rows="3" placeholder="Describe your todo..." v-model="newTodo.description"></textarea>
            </div>
            <button class="btn" @click.prevent="addNewTodo(newTodo)">Add todo</button>
          </form>
        <h4 class="todo__container-small-header">You have {{todo_list.length}} todo</h4>
        <ul class="todo__list">
          <li class="todo__list-item">
            <strong class="todo__list-item-title">Title</strong><strong class="todo__list-item-descr">Description</strong><strong class="todo__list-item-status">Status</strong><div class="todo__list-item-buttons"></div>
          </li>
          <li class="todo__list-item" v-for="item in todo_list" :key="item.id">
            <strong class="todo__list-item-title">{{item.title}}</strong><p class="todo__list-item-descr">{{item.description}}</p><p class="todo__list-item-status">{{item.done}}</p><div class="todo__list-item-buttons"><button class="btn btn-edit" @click.prevent="editTodos(item)">Edit</button><button class="btn btn-delete" @click.prevent="deleteTodo(item)">Delete</button></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data:()=>({
    autor:"admin",
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
    todo_list:[
      {
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
        title:"Walking",
        description:"Go for a walk in the park with friends, have a coffee, and socialize",
        autor:"Admin",
        done: false,
      }
    ]
  }),
  methods:{
    addNewTodo(payload){
      this.todo_list.push({
        ...payload,
        id:Date.now(),
        autor:this.autor
        })
      this.resetNewTodo()
    },
    resetNewTodo(){
      this.newTodo.title="";
      this.newTodo.description="";
    },
    editTodos(payload){
      this.editTodo={...payload}
      this.editDialog=true
    },
    deleteTodo(payload){
      this.todo_list = this.todo_list.filter(elem=>elem.id!==payload.id)
    },
    changeTodo(payload){
      this.todo_list = this.todo_list.map((elem,index)=>{
        if(elem.id==payload.id){
          return payload
        }
        return elem
      })
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
.modal-edit__card{
  background: #FFFFFF;
  width: 60%;
}
.modal-edit__card-header{
  margin: 20px 20px;
  font-size: 24px;
}
.main-bg{
  background: linear-gradient(#00A9E7,#005B9F);
  width: 100%;
  height: 800px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.modal-edit{
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
}
.todo{
  display: flex;
  flex-direction: column;
}
.todo__logo{
  width: 186px;
  height: 119px;
  margin: 65px auto;
}
.todo__container{
  background: #FFFFFF;
}
.todo__container-form{
  margin: 20px 20px;
  justify-content: space-around;
  align-items: center;
}
.todo__form-input-container{
  align-items: center;
}
.todo__form-label{
  margin-right: 10px;
  font-weight: 600;
  font-size: 20px;
}
.todo__container-header{
  font-weight: bold;
  font-size: 60px;
  line-height: 156.69%;
  text-align: center;
}
.todo__container-small-header{
  font-size: 20px;
  line-height: 156.69%;
  text-align: center;
  margin: 20px auto;
}
.todo__list{
  display: flex;
  flex-direction: column;
  padding: 20px 25px;
}
.todo__list-item{
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.todo__form-input{
  padding: 5px 10px;
  font-size: 18px;
}
.todo__form-textarea{
  padding: 5px 10px;
  resize: none;
  font-size: 18px;
}
.todo__list-item-title{
  flex: 0 0 20%;
}
.todo__list-item-descr{
  flex: 0 0 60%;
  margin: 0;
}
.todo__list-item-status{
  flex: 0 0 10%;
  margin: 0;
}
.todo__list-item-buttons{
  flex: 0 0 10%;
}
.btn-edit{
  margin-right: 10px;
}
</style>