<template>
  <div>
  </div>
</template>

<script>
export default {
  beforeCreate(){
    if(this.$store.state.statusLogin){
      this.$router.push('/todo')
    }else{
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>