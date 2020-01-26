<template>
    <p class="p-4 border-blue-500 border">
        <span class="font-bold">MyObjectSlotComponent</span>
        {{ specialObject.property1 }}
        {{ specialObject.property2 }}
        <slot></slot>
    </p>
</template>

<script>
    export default {
        name: 'MyObjectSlotComponent',
        props: {
            specialObject: Object
        }
    }
</script>
