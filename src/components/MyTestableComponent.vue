<template>
    <span>{{ message }}</span>
</template>

<script>
    export default {
        name: 'MyTestableComponent',
        data() {
            return {
                message: "Hello!"
            }
        },
        props: {
            messageProp: { type: String, default: "" }
        },
        created() {

        }
    }
</script>
