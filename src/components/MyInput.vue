<template>
    <!-- in a custom component, the @input will call the supplied method with an event object -->
    <!-- it doesn't need a :value binding unless you wanna display the value inside the component too -->
    <div>
        <input class="input mx-1" :placeholder="placeholder" :value="value" @input="customInputChanged" />
        <p class="mx-1">Inside custom component: {{ capitalizeThis }}</p>
    </div>
</template>

<script>
    export default {
        name: "MyInput",
        props: {
            value: String,
            placeholder: String,
        },
        data: function() {
            console.log("data", this.value);
            console.log("data", this.placeholder);

            return {
                updatedValue: this.value
            }
        },
        methods: {
            customInputChanged: function(event) {
                console.log('event', event.target.value);
                this.$emit('inputChanged', event.target.value);
            }
        },
        computed: {
            capitalizeThis: function() {
                console.log("myValue:", this.value);
                return this.value ? this.value[0].toUpperCase() + this.value.slice(1) : ''
            }
        }
    }
</script>

<style scoped>

</style>
