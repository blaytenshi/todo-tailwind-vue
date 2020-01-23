<template>
    <tr>
        <td>{{ person.name }}</td>
        <td>{{ person.age }}</td>
        <td>{{ person.email }}</td>
        <td>{{ person.amountInSuper }}</td>
    </tr>
</template>

<script>
    export default {
        name: "PersonRow",
        props: {
            person: { type: Object }
        }
    }
</script>

<style scoped>
    td {
        @apply border-b border-r border-blue-500 p-2
    }

    td:first-child {
        @apply border-l border-blue-500
    }

</style>
