<template>
    <div>
        <h1 class="text-4xl font-sans font-black">Todo List</h1>
        <div class="py-4">
            <router-link to="/eventHandling" class="btn-blue mx-1">Event Page</router-link>
            <router-link to="/" class="btn-blue mx-1">Home Page</router-link>
            <router-link to="/formHandling" class="btn-blue mx-1">Form Handling Page</router-link>
            <router-link to="/tableStyling" class="btn-blue mx-1">Table Styling Page</router-link>
            <router-link to="/elementUi" class="btn-blue mx-1">Element Ui Styling Page</router-link>
            <router-link to="/slots" class="btn-blue mx-1">VueJS Slots Page</router-link>
            <router-link to="/componentis" class="btn-blue mx-1">Component Is Page</router-link>
        </div>
        <RenderProps :myProp="myProp" />
    </div>
</template>

<script>
    import RenderProps from "./RenderProps";

    export default {
        name: 'TodoHeader',
        components: {
            RenderProps
        },
        data: function() {
            return {
                myProp: "Render This!"
            }
        }
    }
</script>
