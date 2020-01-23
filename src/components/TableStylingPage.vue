<template>
    <div>
        <h1>Table Styling!</h1>
        <NameTable :loading="fetching" :data="data" :count="count"/>
    </div>
</template>

<script>
    import NameTable from './NameTable';
    import { getTableData } from '../MyApi'

    export default {
        name: 'TableStylingPage',
        components: {
            NameTable
        },
        data() {
            return {
                data: null,
                count: 0,
                fetching: false
            }
        },
        beforeCreate() {
            this.fetching = true;
        },
        created() {
            getTableData().then(res => {
                console.log("result", res.data);
                this.data = res.data;
            })
        }
    }
</script>
