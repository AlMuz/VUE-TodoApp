<template lang="html">
  <input v-model="todo" @keyup.enter="saveTodo" type="text" placeholder="Todo item">
</template>

<script>
export default {
  data: () => ({
    todo: ''
  }),
  methods : {
    saveTodo() {
      // make a commit to the vuex store
      this.$store.commit('addTodo', this.todo);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
