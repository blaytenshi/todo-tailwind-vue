<template>
    <component :is="loadComponent" />
</template>

<script>
    import MyComponent from "../../components/MyComponent";

    export default {
        name: "ComponentIsPage",
        components: {
            MyComponent
        },
        computed: {
            loadComponent() {
                return MyComponent
            }
        }
    }
</script>

<style scoped>

</style>
