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
        <MyObjectSlotComponent class="m-2">
            <template v-slot:internalData="boundPropsOfInternalDataSlot">
                {{ boundPropsOfInternalDataSlot.myExternalData.internalProperty1 }}
            </template>
            <template v-slot:doggoData="boundPropsOfDoggoDataSlot">
                {{ boundPropsOfDoggoDataSlot.myExternalDoggoData.axe.name }}
                {{ boundPropsOfDoggoDataSlot.myExternalURLData[1].url }}
            </template>
        </MyObjectSlotComponent>
        <MyDeprecatedSlotComponent class="m-2">
            <p slot="header" slot-scope="boundPropsOfHeaderProps">
                {{ boundPropsOfHeaderProps.myExternalHeaderData.title }}
            </p>
        </MyDeprecatedSlotComponent>
    </div>
</template>

<script>
    import MySlotComponent from './MySlotComponent'
    import MyObjectSlotComponent from './MyObjectSlotComponent'
    import MyNamedSlotComponent from './MyNamedSlotComponent'
    import MyDeprecatedSlotComponent from './MyDeprecatedSlotComponent'

    export default {
        name: "index.vue",
        components: {
            MySlotComponent,
            MyObjectSlotComponent,
            MyNamedSlotComponent,
            MyDeprecatedSlotComponent,
        },
        data() {
            return {
                specialObject: {
                    property1: "property1Value",
                    property2: 2
                },
            }
        }
    }
</script>

<style scoped>

</style>
