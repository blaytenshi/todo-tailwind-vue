<template>
    <div>
        <h1>Todo List</h1>
        <AddTodo />
        <TodoListItem
                v-for="todo in allTodos"
                :todo="todo"
                :key="todo.id"
        />
        <div class="flex bg-green-400 p-5 justify-end">
            <div class="w-20 h-20 bg-red-400 ml-5">Box 1</div>
            <div class="w-20 h-20 bg-blue-400 ml-5">Box 2</div>
        </div>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex';
    import AddTodo from '../../components/AddTodo';
    import TodoListItem from '../../components/TodoListItem';

    export default {
        name: 'TodoListPage',
        components: {
            AddTodo,
            TodoListItem
        },
        computed: {
            ...mapGetters(['allTodos']),
        }
    }
</script>
