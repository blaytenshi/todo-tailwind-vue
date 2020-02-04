<template>
    <div id="example-1">
        <button class="btn-blue" @click="counter += 1">Add 1</button>
        <p>The button above has been clicked {{ counter }} times.</p>
        <MyComponent testProp="Hi There" />
        <MousePointer />
    </div>
</template>

<script>
    import MyComponent from '../../components/MyComponent';
    import MousePointer from "../../components/MousePointer";

    export default {
        name: 'EventHandlingPage',
        components: {
            MyComponent,
            MousePointer
        },
        data: function() {
            return {
                counter: 0
            }
        },
    }
</script>
