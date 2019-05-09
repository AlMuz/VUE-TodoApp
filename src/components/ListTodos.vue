<template lang="html">
  <ul>
    <li v-for="(todoItem, index) in todos" :key="index">{{ todoItem }}</li>
  </ul>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.state.todos
    }
  }
}
</script>

<style lang="css" scoped>
</style>
