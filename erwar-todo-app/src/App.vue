<template>
  <div id="app">
    <Navbar :islogin="islogin"></Navbar>
    <br>
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <Footers></Footers>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footers from '@/components/Footers'
export default {
  name: 'app',
  components: {
    Navbar,
    Footers
  },
  data () {
    return {
      islogin: false
    }
  },
  created () {
    var check = localStorage.getItem('token')
    if (check) {
      this.islogin = true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;

}
.dropdown-item.active, .dropdown-item:active {
    color: #fff;
    text-decoration: none;
    background-color: #f5a5b0;
}
</style>
