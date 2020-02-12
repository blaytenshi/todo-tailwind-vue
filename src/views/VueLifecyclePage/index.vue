<template>
    <div>
        <h1>Vue Lifecycle</h1>
        <button @click="updateData">Update Data</button>
        <WatchComponent :myProp="myProp" />
    </div>
</template>

<script>
    import WatchComponent from '../../components/WatchComponent';

    export default {
        name: "VueLifecyclePage",
        components: {
            WatchComponent
        },
        data() {
            return {
                myProp: {
                    name: 'Jimmy',
                    age: 25
                }
            }
        },
        methods: {
            updateData() {
                this.myProp = {
                    name: 'Shirley',
                    age: 20
                }
            }
        }
    }
</script>

<style scoped>

</style>
