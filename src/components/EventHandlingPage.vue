<template>
    <div id="example-1">
        <button class="btn-blue" @click="counter += 1">Add 1</button>
        <p>The button above has been clicked {{ counter }} times.</p>
        <MyComponent testProp="Hi There" />
    </div>
</template>

<script>
    import MyComponent from './MyComponent';

    export default {
        name: 'EventHandlingPage',
        components: {
            MyComponent
        },
        data: function() {
            return {
                counter: 0
            }
        },
    }
</script>

<style scoped>
    .btn-blue {
        @apply border-blue-700 text-white py-2 px-4 rounded-lg bg-blue-500;
    }

    .btn-blue:hover {
        @apply bg-blue-700
    }
</style>
