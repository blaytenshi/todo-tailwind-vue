<template>
    <p class="p-4 border-blue-500 border">
        <span class="font-bold">MyObjectSlotComponent</span>
        <slot
                name="internalData"
                v-bind:myExternalData="myInternalData" />
        <slot
                name="doggoData"
                v-bind:myExternalDoggoData="myInternalDoggoData"
                v-bind:myExternalURLData="myInternalURLData"
        />
    </p>
</template>

<script>
    export default {
        name: 'MyObjectSlotComponent',
        data() {
            return {
                myInternalData: {
                    internalProperty1: "Hi there",
                    internalProperty2: 6
                },
                myInternalDoggoData: {
                    axe: {
                        name: "axe",
                        type: "Rottweiler"
                    }
                },
                myInternalURLData: [
                    { url: 'http://www.google.com/', visits: 10000 },
                    { url: 'http://www.growsuper.com/', visits: 1000000 }
                ]

            }
        }
    }
</script>
