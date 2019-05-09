<template>
  <div id="app">
    <CreateTodo />
    <ListTodos />
    <TodosCount />
  </div>
</template>

<script>

import TodosCount from './components/TodosCount.vue'
import CreateTodo from './components/CreateTodo.vue'
import ListTodos from './components/ListTodos.vue'

export default {
  name: 'app',
  components: {
    TodosCount,
    CreateTodo,
    ListTodos
  },
  mounted() {
    this.$store.dispatch('getTodos')
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
  margin-top: 60px;
}
input {
  border: 2px solid black;
  padding: 20px;
  font-size: 22px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  font-size: 26px;
}
</style>
