import Axios from 'axios'
var url = "https://5cd3de4bb231210014e3d153.mockapi.io/todos";

export default  {
  state: {
    todos: []
  },
  mutations: {
    addTodo(state, payload) {
      state.todos = [
        ...state.todos,
        payload
      ]
    },
    addTodos(state, payload) {
      state.todos = [
        ...state.todos,
        ...payload
      ]
    }
  },
  getters: {
    todosCount(state) {
      return state.todos.length
    }
  },
  actions: {
    addTodo({ state, commit }, payload) {
      // make api request to store todo
      // commit todo to vuex store
      Axios.post(url, {
        name: payload
      }).then(() => {
        commit('addTodo', payload)
      })

    },
    getTodos({ commit }) {
      Axios.get(url)
      .then(response => {
        commit('addTodos', response.data.map(
          item => item.name
        ))
      })
    }
  }
}
