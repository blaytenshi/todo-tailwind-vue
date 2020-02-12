<template>
    <div>
        <h3>{{ profile.firstName }} {{ profile.lastName }}</h3>
        <li>
            <ul>Age: {{ profile.age }}</ul>
            <ul>Email: {{ profile.email }}</ul>
        </li>
    </div>
</template>

<script>
    export default {
        name: 'MyTestableComponent',
        props: {
            profile: { type: Object, default: () => ({
                    firstName: '',
                    lastName: '',
                    age: 0,
                    email: ''
            }) }
        }
    }
</script>
