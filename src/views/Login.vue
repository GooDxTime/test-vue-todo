<template>
  <div class="login">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Login/Header.vue";
import Main from "@/components/Login/Main.vue";
import Footer from "@/components/Login/Footer.vue";

export default {
  name: 'Login',
  components: {
    Header,Footer,Main
  }
}
</script>

<style>
@import url("../assets/main.css");
</style>
