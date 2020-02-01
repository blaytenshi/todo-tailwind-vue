<template>
    <div>
        <label for="createTodo">Whatcha got to do?</label>
        <input id="createTodo" v-model="todo" type="text" />
        <button class="btn-blue mx-1" @click="addTodo(todo)">Add to List</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "AddTodo",
        data() {
            return {
                todo: ""
            }
        },
        methods: {
            ...mapActions(['addTodo'])
        }
    }
</script>

<style scoped>
    input {
        @apply border-gray-400 border rounded px-2 py-1 ml-2
    }
</style>
