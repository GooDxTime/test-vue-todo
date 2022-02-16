<template>
  <main class="main">
      <div class="container container-main">
        <div class="container-main__left">
          <p class="container-main__header white-text">Welcome to <br>Business Analytics Online</p>
          <p class="container-main__text"><strong>Business Analytics</strong> — a new, convenient tool for managing and forecasting your business performance, which will help analyze your own finances and cash flows, visualize your reporting, business processes, KPI's</p>
          <ul class="container-main__list">
            <li class="container-main__list-item">
              <strong>Interactive Reporting</strong>
              <p>In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities.</p>
            </li>
            <li class="container-main__list-item">
              <strong>Automated data updates</strong>
              <p>The application automatically updates and structures the data in just 60 seconds, saving you time and money.</p>
            </li>
            <li class="container-main__list-item">
              <strong>Data Security</strong>
              <p>The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality.</p>
            </li>
          </ul>
        </div>
        <div class="container-main__right">
          <div class="container-main__form-bg">
            <form action="" class="container-main__form d-flex fd-colum">
              <span class="container-main__form-text">
                Name
              </span>
              <input type="text" name="" id="" :class="{'error-valid':inValid.name}" class="container-main__form-input" v-model="auth.name">
              <span class="error-massage" v-show="inValid.name">
                &times; enter сompany name
              </span>
              <span class="container-main__form-text">
                Password
              </span>
              <input type="password" name="" id="" :class="{'error-valid':inValid.password}" class="container-main__form-input" v-model="auth.password">
              <span class="error-massage" v-show="inValid.password">
                &times; enter password
              </span>
              <button class="btn container-main__form-btn" @click.prevent="loginInSystem(auth)">LOGIN</button>
              <a href="#" class="container-main__form-link-forgot text--center" @click.prevent="giveDataLogin()">Forgot Password</a>
            </form>
          </div>
          <div class="container-main__form-foter">
            <a href="#" class="container-main__form-link-register text--center" @click.prevent="putUser()">Register now</a>
          </div>
       </div>
      </div>
    </main>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data:()=>({
    auth:{
      name:"",
      password:""
    },
    inValid:{
      name:false,
      password:false
    }
  }),
  methods:{
    ...mapActions([
      'putUser','getUser'
    ]),
    loginInSystem(payload){
        this.inValid.name=false;
        this.inValid.password=false;
      if(!payload.name&&!payload.password){
        this.inValid.name=true;
        this.inValid.password=true;
        return
      }else if(!payload.name){
        this.inValid.name=true;
        return
      }else if(!payload.password){
        this.inValid.password=true;
        return
      }

      this.getUser(payload);
      if(this.$store.state.statusLogin){
        this.$router.push('/todo')
      }
    },
    giveDataLogin(){
      alert('[name: Admin, password: 12345] and [name: User, password: 54321]')
    }
  }
}
</script>

<style>

</style>