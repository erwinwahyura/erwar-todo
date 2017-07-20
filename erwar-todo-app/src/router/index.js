import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Auth from '@/components/Auth'
import Add from '@/components/Add'
import MyTodo from '@/components/MyTodo'
import WelcomeTodo from '@/components/WelcomeTodo'
import DetailTodo from '@/components/DetailTodo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/mytodo',
      name: 'MyTodo',
      component: MyTodo,
      children: [
        {
          path: '',
          component: WelcomeTodo
        },
        {
          path: '/mytodo/:id',
          component: DetailTodo,
          props: true
        }
      ]
    }
  ]
})
