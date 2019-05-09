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
      // if commit - mutations
      // if dispatch - actions
      this.$store.dispatch('addTodo', this.todo);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
