<template>
    <div>
        <div>Name: {{ myProp.name }}</div>
        <div>Age: {{ myProp.age }}</div>
    </div>
</template>

<script>
    export default {
        name: "WatchComponent",
        props: {
            myProp: Object
        },
        created() {
            console.log("created");
            console.log(this.myProp);
        },
        mounted() {
            console.log("mounted");
            console.log(this.myProp);
        },
        destroyed() {
            console.log("destroyed");
            console.log(this.myProp);
        },
        watch: {
            myProp(newValue, oldValue) {
                console.log("newValue", newValue);
                console.log("oldValue", oldValue);
            }
        }
    }
</script>

<style scoped>

</style>
