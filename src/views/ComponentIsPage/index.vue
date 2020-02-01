<template>
    <div>
        <button @click="switchComponent">Click to Switch Components</button>
        <component :is="loadComponent" />
    </div>
</template>

<script>
    import MyComponent from "../../components/MyComponent";
    import MyDiffComponent from "../../components/MyDiffComponent";

    export default {
        name: "ComponentIsPage",
        data() {
            return {
                isMyComponent: true
            }
        },
        components: {
            MyComponent
        },
        computed: {
            loadComponent() {
                return this.isMyComponent ? MyComponent : MyDiffComponent
            },
        },
        methods: {
            switchComponent() {
                this.isMyComponent = !this.isMyComponent;
            }
        },
    }
</script>

<style scoped>

</style>
