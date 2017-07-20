<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <b-tabs>
          <b-tab title="Sign In" active>
            <br>
            <div class="col-md-6 offset-md-3 auth">
              <br>
              <label for="username">USERNAME</label>
              <b-form-input v-model="user.username" type="text" placeholder="Enter your name"></b-form-input>
              <br>
              <label for="password">PASSWORD</label>
              <b-form-input v-model="user.password" type="password" placeholder="Enter your password"></b-form-input>
              <br>
              <div class="row">
                <div class="col-md-12">
                  <b-button class="col-md-12 btn btn-success" @click="signin()">SUBMIT</b-button>
                </div>
              </div>
              <br>
            </div>
          </b-tab>
          <b-tab title="Sign Up" >
            <br>
            <div class="col-md-6 offset-md-3 auth">
              <br>
              <label for="username">USERNAME</label>
              <b-form-input v-model="userRegis.username" type="text" placeholder="Enter your name"></b-form-input>
              <br>
              <label for="email">EMAIL</label>
              <b-form-input v-model="userRegis.email" type="email" placeholder="Enter your email"></b-form-input>
              <br>
              <label for="password">PASSWORD</label>
              <b-form-input v-model="userRegis.password" type="password" placeholder="Enter your password"></b-form-input>
              <br>
              <div class="row">
                <div class="col-md-12">
                  <b-button class="col-md-12 btn btn-success" @click="signup()">SUBMIT</b-button>
                </div>
              </div>
              <br>
            </div>
          </b-tab>
        </b-tabs>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      userRegis: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signin () {
      var self = this
      this.axios.post('http://localhost:3000/api/signin', {
        username: self.user.username,
        password: self.user.password
      })
      .then((response) => {
        self.user.username = ''
        self.user.password = ''
        console.log(response.data)
        if (response.data) {
          var token = response.data.token
          var id = response.data.id
          localStorage.setItem('token', token)
          localStorage.setItem('id', id)
          localStorage.setItem('username', response.data.username)
          this.$emit('do-login')
          // window.href.location = '/'
          this.$router.push('/')
        }
      })
      .catch((err) => { console.log(err) })
    },
    signup () {
      var self = this
      this.axios.post('http://localhost:3000/api/signup', {
        username: self.userRegis.username,
        email: self.userRegis.email,
        password: self.userRegis.password
      })
      .then((response) => {
        console.log(response.data)
        alert('Register Success!! \n Welcome, ', +response.data.username)
        self.userRegis.username = ''
        self.userRegis.email = ''
        self.userRegis.password = ''
        this.$router.push('/auth')
      })
    }
  }
}
</script>

<style lang="css" scoped>
label {
    display: flex;
    margin-bottom: 1.5rem;
}
.auth {
  border: 1px solid #31708f;
}
.btn-success {
    color: #fff;
    background-color: #31708f;
    border-color: #31708f;
}
</style>
