<template>
    <div>
        <h1>Slots Page!</h1>
        <MySlotComponent specialProp="specialValue" class="m-2">
            Slot Special Value
        </MySlotComponent>
        <MyNamedSlotComponent class="m-2">
            <template v-slot:header>
                <p class="font-bold">Header Content Only</p>
            </template>
            Main Content can also be wrapped in a template tag with v-slot:default as non-named slot tags are defaulted to default
            <template v-slot:footer>
                <p class="italic">Footer Content</p>
            </template>
        </MyNamedSlotComponent>
        <MyObjectSlotComponent :specialObject="specialObject" class="m-2">
            <template v-slot="externalObject" />
        </MyObjectSlotComponent>
    </div>
</template>

<script>
    import MySlotComponent from './MySlotComponent'
    import MyObjectSlotComponent from './MyObjectSlotComponent'
    import MyNamedSlotComponent from './MyNamedSlotComponent'

    export default {
        name: "index.vue",
        components: {
            MySlotComponent,
            MyObjectSlotComponent,
            MyNamedSlotComponent,
        },
        data() {
            return {
                specialObject: {
                    property1: "property1Value",
                    property2: 2
                },
                externalObject: {
                    externalProperty1: "externalProp1Value",
                    externalProperty2: 4
                }
            }
        }
    }
</script>

<style scoped>

</style>
