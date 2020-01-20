<template>
    <!-- in a custom component, the @input will call the supplied method with an event object -->
    <!-- it doesn't need a :value binding unless you wanna display the value inside the component too -->
    <div>
        <input class="input mx-1" @input="customInputChanged" />
        <p class="mx-1">Inside custom component: </p>
    </div>
</template>

<script>
    export default {
        name: "MyInput",
        props: {
            myValue: String
        },
        methods: {
            customInputChanged: function(event) {
                console.log('event', event.target.value);
                this.$emit('inputChanged', event.target.value);
            }
        },
    }
</script>

<style scoped>

</style>
