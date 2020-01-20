<template>
    <div>
        <h1 class="text-4xl font-sans font-black">Todo List</h1>
        <div class="py-4">
            <router-link to="/eventHandling" class="btn-blue mx-1">Event Page</router-link>
            <router-link to="/" class="btn-blue mx-1">Home Page</router-link>
            <router-link to="/formHandling" class="btn-blue mx-1">Form Handling Page</router-link>
            <router-link to="/tableStyling" class="btn-blue mx-1">Table Styling Page</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TodoHeader'
    }
</script>
