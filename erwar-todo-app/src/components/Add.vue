<template lang="html">
  <div class="container ">
    <div class="row">
      <br>
      <div class="col-md-6 offset-md-3 add">
        <br>
        <label for="title">TITLE</label>
        <b-form-input v-model="add.title" type="text" placeholder="Enter your title"></b-form-input>
        <br>
        <label for="description">DESCRIPTION</label>
        <b-form-input textarea v-model="add.description" placeholder="Enter your description"></b-form-input>
        <br>
        <b-form-checkbox v-model="state" value="completed" unchecked-value="uncomplete">
          <div>Mark as: <strong>{{state}}</strong></div>
        </b-form-checkbox>

        <div class="row">
          <div class="col-md-12">
            <b-button class="col-md-12 btn btn-success" @click="addTodo()">SUBMIT</b-button>
          </div>
        </div>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      add: {
        title: '',
        description: '',
        completed: false
      },
      state: 'uncomplete'
    }
  },
  methods: {
    addTodo () {
      var self = this
      this.axios.post('http://ec2-54-255-204-49.ap-southeast-1.compute.amazonaws.com/api/todos', {
        title: self.add.title,
        description: self.add.description,
        completed: self.state,
        creator: localStorage.getItem('id')
      }, {headers: { token: localStorage.getItem('token') }})
      .then((response) => {
        console.log(response.data)
        self.add.title = ''
        self.add.description = ''
        alert('Add Todo Success!')
        this.$router.push('/mytodo')
      })
      .catch((err) => { console.log(err) })
    }
  }
}
</script>

<style lang="css">
.btn-success {
    color: #fff;
    background-color:#31708f;
    border-color: #31708f;
}
label {
    display: flex;
    margin-bottom: 1.5rem;
}
.add {
  border: 1px solid #31708f;
}
.btn-success {
    color: #fff;
    background-color:#31708f;
    border-color: #31708f;
}
b-form-checkbox {
  background-color:#31708f;
  border-color: #31708f;
}
</style>
