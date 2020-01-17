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
};

const mutations = {
    toggleDoneStatus: (state, id) => {
        const index = state.todos.findIndex(todo => todo.id === id );
        state.todos[index].done = !state.todos[index].done;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
