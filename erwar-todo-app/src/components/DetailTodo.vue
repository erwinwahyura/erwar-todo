<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <!-- Simple -->
        <b-card class="mb-2" variant="success">This Below is Your Todo!</b-card>
        <!-- With image -->
        <b-card img="http://placeskull.com/200/200/ABABAB/-1/0"
                class="mb-2"
        >
        <h1>{{ todo.title }}</h1>
           <p>{{ todo.description }}</p>
           <p>{{ todo.creator.username }}</p>
           <b-button v-if="cek" class="btn btn-danger" @click="remove(todo._id)">Delete</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      todo: [],
      cek: false
    }
  },
  watch: {
    id (newId) {
      this.getTodo()
      var self = this
      this.axios.get('http://localhost:3000/api/todos/' + self.id)
      .then((response) => {
        console.log(response.data)
        self.todo = response.data
        var userID = localStorage.getItem('id')
        var todoCreator = response.data.creator._id
        if (userID === todoCreator) {
          this.cek = true
        } else {
          this.cek = false
        }
      })
      .catch((err) => { console.log(err) })
    }
  },
  methods: {
    getTodo () {
      var self = this
      this.axios.get('http://localhost:3000/api/todos/' + self.id)
      .then((response) => {
        console.log(response.data)
        self.todo = response.data
      })
      .catch((err) => { console.log(err) })
    },
    remove (ids) {
      this.axios.delete('http://localhost:3000/api/todos/' + ids)
      .then((response) => {
        alert(response.data)
        this.getTodo()
      })
      .catch((err) => { console.log(err) })
    }
  },
  created () {
    this.getTodo()
  }
}
</script>

<style lang="css" scoped>
.card-success {
    background-color: #31708f;
    border-color: #31708f;
}
</style>
