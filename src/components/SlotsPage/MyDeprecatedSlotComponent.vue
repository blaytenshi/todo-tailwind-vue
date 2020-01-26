<template>
    <div class="border border-purple-500 p-4">
        <span class="font-bold">MyDeprecatedSlotComponent</span>
        <slot name="header" :myExternalHeaderData="myInternalHeaderData"></slot>
    </div>
</template>

<script>
    export default {
        name: 'MyDeprecatedSlotComponent',
        data() {
            return {
                myInternalHeaderData: {
                    title: 'My Internal Header!'
                }
            }
        }
    }
</script>
