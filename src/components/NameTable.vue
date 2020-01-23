<template>
    <table class="border-separate border-spacing-0 w-full">
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Super Amount</th>
            </tr>
        </thead>
        <tbody v-if="data === null">
            <tr>
                <td colspan="4">Loading...</td>
            </tr>
        </tbody>
        <tbody v-else>
            <PersonRow v-for="person in data" :person="person" :key="person.name" />
        </tbody>
    </table>
</template>

<script>
    import PersonRow from './PersonRow';

    export default {
        name: 'NameTable',
        components: {
            PersonRow
        },
        props: {
            loading: { type: Boolean, default: false },
            data: { type: Array, default: null },
            count: { type: Number, default: 0 }
        },
    }
</script>

<style scoped>
    th {
        @apply bg-blue-400
    }

    tr th, tr td {
        @apply p-2 border-r border-b border-blue-500
    }

    tr th {
        @apply border-t text-white text-left
    }

    tr td:first-child, tr th:first-child {
        @apply border-l
    }

    th:last-child, td:last-child {
        @apply text-right pr-4
    }

    tr:first-child th:first-child {
        @apply rounded-tl-lg
    }

    tr:first-child th:last-child {
        @apply rounded-tr-lg
    }
</style>
