<template>
  <navbar></navbar>
  <router-view></router-view>
  <logo></logo>
</template>

<script>
import navbar from "./components/Navbar.vue";
import logo from "./components/Logo.vue";
export default {
  data(){
    return{
      
    }
  },
  components: {
    navbar,
    logo,
  }
}
</script>

<style>

</style>