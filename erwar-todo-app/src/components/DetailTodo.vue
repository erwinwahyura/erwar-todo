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
      todo: []
    }
  },
  watch: {
    id (newId) {
      var self = this
      this.axios.get('http://localhost:3000/api/todos/' + self.id)
      .then((response) => {
        console.log(response.data)
        self.todo = response.data
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
    }
  },
  created () {
    this.getTodo()
  }
}
</script>

<style lang="css" scoped>
.card-success {
    background-color: #f5a5b0;
    border-color: #c5aaae;
}
</style>
