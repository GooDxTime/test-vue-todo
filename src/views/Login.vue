<template>
  <div class="login">
    <header class="header">
      <div class="header__logo">
        <div class="container">
          <img class="header__logo-img" src="@/assets/logo.svg" alt="">
        </div>
      </div>
    </header>
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
              <input type="text" name="" id="" class="container-main__form-input">
              <span class="container-main__form-text">
                Password
              </span>
              <input type="password" name="" id="" class="container-main__form-input">
              <button class="btn container-main__form-btn">LOGIN</button>
              <a href="" class="container-main__form-link-forgot text--center">Forgot Password</a>
            </form>
          </div>
          <div class="container-main__form-foter">
            <a href="" class="container-main__form-link-register text--center">Register now</a>
          </div>
       </div>
      </div>
    </main>
    <footer class="footer">
      <div class="container">
        <div class="footer__navigation">
          <div>
            <img src="@/assets/logo.svg" alt="logo" class="footer__navigation-logo-img">
          </div>
          <nav class="footer__nav-bar">
            <ul class="footer__list">
              <li class="footer__list-item white-text">
                Terms & Conditions
              </li>
              <li class="footer__list-item white-text">
                Privacy
              </li>
              <li class="footer__list-item white-text">
                Notice at Collection
              </li>
              <li class="footer__list-item white-text">
                CA Privacy Hub
              </li>
              <li class="footer__list-item white-text">
                Contact Us
              </li>
              <li class="footer__list-item white-text">
                Sitemap
              </li>
            </ul>
          </nav>
        </div>
        <div class="footer__copyright">
          <p class="footer__copyright-text white-text">
            Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style>
.header{
  background-color:#333333;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.header__logo{
  background: linear-gradient(#00A9E7,#005B9F);
  height: 96px;
  display: flex;
  align-items: center
}
.main{
  background-image: url("../assets/bg-img.png");
  background-repeat: no-repeat;
  min-height: 657px;
}
.container-main{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.container-main__left{
  flex: 0 0 60%;
  max-width: 600px;
}
.container-main__right{
  flex: 0 0 40%;
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
}
.container-main__list-item{
  list-style: none;
  font-size: 14px;
  line-height: 156.69%;
}
.container-main__list-item::before {
  content: url("../assets/list-marker.svg");
  margin-right: 15px;
}
.container-main__header{
  font-family: Roboto;
  font-size: 55px;
  line-height: 156.69%;
  margin-top: 215px;
}
.container-main__text{
  margin-top: 110px;
  font-weight: 500;
  font-size: 16px;
  line-height: 156.69%;
}
.container-main__form-bg{
  background: #FFFFFF;

  padding: 0 40px;
  padding-bottom: 23px;
}
.container-main__form-text{
  margin-top: 40px;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #333333;
}
.container-main__form-input{
  margin-top: 7px;
  height: 53px;
  padding: 0 10px;
  font-size: 20px;
  line-height: 21px;
}
.container-main__form-btn{
  margin-top: 40px;
  font-size: 25px;
  line-height: 29px;
}
.container-main__form-link-forgot{
  margin-top: 20px;
  font-size: 20px;
  line-height: 23px;
  color: #056DAE;
}
.container-main__form-foter{
  background: #F6F6F6;
  display: flex;
  justify-content: center;
  padding: 12px 0px;
}
.container-main__form-link-register{
  color: #333333;
  font-size: 25px;
  line-height: 29px;
}
.footer{
  background: #333333;
  margin-top: 50px;
}
.footer__navigation{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 3px;
  border-bottom: 1px solid #FFFFFF;
}
.footer__navigation-logo-img{
  width: 55px;
  height: 36px;
}
.footer__list{
  display: flex;
}
.footer__list-item{
list-style: none;
font-weight: 500;
font-size: 16px;
line-height: 156.69%;
}
.footer__list-item:not(:last-child){
  margin-right: 20px;
}
.footer__copyright{
  padding: 25px 3px;
}
.footer__copyright-text{
  margin: 0;
}

@media (max-width: 1000px){
  .container-main{
    flex-direction: column;
  }
}
@media (max-width: 600px){
  .footer__nav-bar{
    display: none;
  }
  .footer__copyright{
    display: none;
  }
  .footer__navigation{
    border-bottom: none;
  }
}
</style>
