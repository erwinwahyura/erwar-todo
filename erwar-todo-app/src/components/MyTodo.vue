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
  props: ['islogin'],
  data () {
    return {
      listTodo: []
    }
  },
  methods: {
    getListTodo () {
      var self = this
      this.axios.get('http://ec2-54-255-204-49.ap-southeast-1.compute.amazonaws.com/api/todos')
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
    background-color: #31708f;
    border-color: #31708f;
}
</style>
