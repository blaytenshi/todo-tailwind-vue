<template>
    <MyTestableComponent messageProp="Jimmy" />
</template>

<script>
    import MyTestableComponent from '../../components/MyTestableComponent';

    export default {
        name: "TestingPage",
        components: {
            MyTestableComponent
        }
    }
</script>

<style scoped>

</style>
