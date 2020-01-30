<template>
    <div>
        <div>Element UI!</div>
        <hr/>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="Date"
                    width="180"
                    sortable>
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="Name"
                    width="180"
                    sortable>
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="Address"
                    sortable>
            </el-table-column>
            <el-table-column
                    prop="powerLevel"
                    label="Power Level"
                    sortable
                    :sort-by="powerLvlDateSort"
            >
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "ElementUiPage",
        data() {
            return {
                tableData: [{
                    date: '2016-05-03',
                    name: 'Daniel',
                    address: 'No. 189, Grove St, Los Angeles',
                    powerLevel: 9500
                }, {
                    date: '2016-05-02',
                    name: 'Chris',
                    address: 'No. 189, Grove St, Los Angeles',
                    powerLevel: 5000
                }, {
                    date: '2016-05-04',
                    name: 'Alfred',
                    address: 'No. 189, Grove St, Los Angeles',
                    powerLevel: 9001
                }, {
                    date: '2016-05-01',
                    name: 'Bob',
                    address: 'No. 189, Grove St, Los Angeles',
                    powerLevel: 1
                }]
            }
        },
        methods: {
            powerLvlDateSort(row, index) {
                console.log("hello there");
                console.log(row.powerLevel);
                return row.powerLevel
            }
        }
    }
</script>

<style scoped>

</style>
