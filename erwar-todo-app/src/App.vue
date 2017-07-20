<template>
  <div id="app">
    <Navbar :islogin="islogin" @logout="logout()"></Navbar>
    <br>
    <router-view :islogin="islogin" @checkLogin="chekLogin()" @do-login="doLogin()"></router-view>
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
  methods: {
    checkLogin () {
      var check = localStorage.getItem('token')
      if (check) {
        this.islogin = true
      }
    },
    logout () {
      this.islogin = false
    },
    doLogin () {
      this.islogin = true
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
    background-color: #31708f;
}
</style>
