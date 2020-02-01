<template>
    <div>
        <div>A different Component!</div>
        <div>{{ myPropData }}</div>
    </div>
</template>

<script>
    export default {
        name: "MyDiffComponent",
        props: {
            myPropData: { type: String, default: "default value in myPropData" }
        }
    }
</script>

<style scoped>

</style>
