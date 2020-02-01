<template>
    <div>
        <label for="createTodo">Whatcha got to do?</label>
        <input id="createTodo" type="text" />
        <button class="btn-blue" @click="createTodo">Add to List</button>
    </div>
</template>

<script>
    export default {
        name: "AddTodo",
        data() {
            return {
                todo: { type: String, default: "" }
            }
        },
        methods: {
            createTodo() {
                alert('calling createTodo');
                this.$emit('create-todo')
            }
        }
    }
</script>

<style scoped>
    input {
        @apply border-gray-400 border rounded px-2 py-1 ml-2
    }
</style>
