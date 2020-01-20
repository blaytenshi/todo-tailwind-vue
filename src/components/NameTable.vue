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
        <tbody>
            <tr>
                <td>Ben</td>
                <td>30</td>
                <td>ben@growsuper.com</td>
                <td>$1,000,000</td>
            </tr>
            <tr>
                <td>Jimmy</td>
                <td>33</td>
                <td>jimmy@growsuper.com</td>
                <td>$50,000</td>
            </tr>
            <tr>
                <td>Michael</td>
                <td>33</td>
                <td>michael@uts.edu.au</td>
                <td>$100,000</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: 'NameTable'
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
