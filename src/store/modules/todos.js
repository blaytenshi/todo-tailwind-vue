const state = {
    todos: [
        { id: 1, name: "Learn Vue", done: true },
        { id: 2, name: "Make Todo App", done: false }
    ]
};

const getters = {
    allTodos: () => {
        return state.todos
    }
};

const actions = {
    toggleDone: ({ commit }, id) => {
        commit('toggleDoneStatus', id );
    },
    addTodo: ({ commit }, todoName) => {
        commit('createTodo', todoName);
    }
};

const mutations = {
    toggleDoneStatus: (state, id) => {
        const index = state.todos.findIndex(todo => todo.id === id );
        state.todos[index].done = !state.todos[index].done;
    },
    createTodo: (state, todoName) => {
        state.todos.push({ id: state.todos.length + 1, name: todoName, done: false })
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
