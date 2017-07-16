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
          localStorage.setItem('token', token)
          localStorage.setItem('name', response.data.name)
          this.$router.push('/')
        }
      })
      .catch((err) => { console.log(err) })
    }
  }
}
</script>

<style lang="css" scoped>
label {
    display: flex;
    margin-bottom: 1.5rem;
}
.col-md-6 offset-md-3 {
}
.auth {
  border: 1px solid #e4e6e8;
}
.btn-success {
    color: #fff;
    background-color: #f5a5b0;
    border-color: #e4e6e8;
}
</style>
