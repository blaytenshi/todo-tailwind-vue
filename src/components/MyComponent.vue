<template>
    <div>
        <div>My Template</div>
        <div>{{ testProp }}</div>
    </div>
</template>

<script>
    export default {
        name: 'MyComponent',
        props: {
            testProp: { type: String, default: "default value of testProp in MyComponent" }
        }
    }
</script>
