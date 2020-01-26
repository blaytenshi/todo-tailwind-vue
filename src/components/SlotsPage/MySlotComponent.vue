<template>
    <p class="p-4 border-red-500 border">
        <span class="font-bold">MySlotComponent</span>
        {{ specialProp }}
        <slot>Inside slots tag is ignored</slot>
    </p>
</template>

<script>
    export default {
        name: "MySlotComponent",
        props: {
            specialProp: String
        }
    }
</script>

<style scoped>

</style>
