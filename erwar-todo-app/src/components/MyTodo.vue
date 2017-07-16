<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-3" >
        <b-list-group >
          <b-list-group-item active>
            My Foxy Fancy Todo List
          </b-list-group-item>
          <b-list-group-item v-for="lt in listTodo" :to="'/mytodo/'+lt._id">{{ lt.title }}</b-list-group-item>
        </b-list-group>
      </div>
      <div class="col-md-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listTodo: []
    }
  },
  methods: {
    getListTodo () {
      var self = this
      this.axios.get('http://localhost:3000/api/todos')
      .then((response) => {
        console.log(response.data)
        self.listTodo = response.data
      })
      .catch((err) => { console.log(err) })
    }
  },
  created () {
    this.getListTodo()
  }
}
</script>

<style lang="css" scoped>
.list-group-item.active {
    z-index: 2;
    color: #fff;
    background-color: #f5a5b0;
    border-color: #c5aaae;
}
</style>
