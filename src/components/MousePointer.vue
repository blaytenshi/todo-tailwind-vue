<template>
    <div class="mousePad" @mousemove="showCoordinates">
        <div>Client X: {{clientX}}</div>
        <div>Client Y: {{clientY}}</div>
    </div>
</template>

<script>
    export default {
        name: "MousePointer",
        data () {
            return {
                clientX: 0,
                clientY: 0
            }
        },
        methods: {
            showCoordinates(event) {
                this.clientX = event.clientX;
                this.clientY = event.clientY;
            }
        }
    }
</script>

<style scoped>
    .mousePad {
        @apply bg-blue-400 w-32 h-32
    }
</style>
