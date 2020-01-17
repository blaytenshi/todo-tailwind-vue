<template>
    <div>
        <h2>Todo List</h2>
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
    import { mapGetters } from 'vuex';
    import TodoListItem from './TodoListItem';

    export default {
        name: 'TodoListPage',
        components: {
            TodoListItem
        },
        computed: {
            ...mapGetters(['allTodos']),
        }
    }
</script>
