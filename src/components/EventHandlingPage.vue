<template>
    <div id="example-1">
        <button class="" @click="counter += 1">Add 1</button>
        <p>The button above has been clicked {{ counter }} times.</p>
    </div>
</template>

<script>
    export default {
        name: 'EventHandlingPage',
        data: function() {
            return {
                counter: 0
            }
        }
    }
</script>
