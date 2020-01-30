<template>
    <div @click="myFunction">
        <input type="checkbox" :name="checkbox" :key="checkbox.name" class="hidden customCheckbox"><label class="pl-4">{{ checkbox.name }}</label>
<!--        <input type="checkbox" :name="checkbox.name" :checked="checkbox.checked" /><label :for="checkbox.name">{{ checkbox.name }}</label>-->
    </div>
</template>

<script>
    export default {
        name: 'MyCustomCheckbox',
        props: {
            checkbox: Object
        },
        methods: {
            myFunction: function() {
                console.log('hi');
            }
        }
    }
</script>

<style scoped>
    label::before {
        content: '';
        @apply w-5 h-5 bg-blue-500 inline-block;
    }

    .customCheckbox:checked {
        @apply w-5 h-5 bg-red-500 inline-block;
    }
</style>
