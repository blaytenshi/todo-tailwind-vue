<template>
    <div>
        <input type="checkbox" :id="todo.id" v-model="todo.done" @click="toggleDone(todo.id)"/>
        <label :for="todo.id">{{ todo.name }}</label>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "TodoListItem",
        props: {
            todo: Object
        },
        methods: {
            ...mapActions(['toggleDone'])
        }
    }
</script>

<style scoped>

</style>
