<template>
    <div class="p-4 border border-green-500">
        <span class="font-bold">MyNamedSlotComponent</span>
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
    </div>
</template>

<script>
    export default {
        name: 'MyNamedSlotComponent'
    }
</script>
