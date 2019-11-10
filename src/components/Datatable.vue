<template>
<div>
    <table class="datatable" id="datatable">
        <thead>
            <tr>
                <th>#</th>
                <th v-for="(column, i) in columns" :key="i">{{column}}</th>
                <th>
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, ri) in value" :key="ri">
                <th>{{ri}}</th>
                <td v-for="(column, ci) in row" :key="ci" @click="edit_column = column">{{ column || 'null' }}</td>
                <td>
                    <button class="button warning" @click="edit_index = ri"><i class="fa fa-edit"></i></button>
                    <button class="button danger"><i class="fa fa-trash"></i></button>
                </td>
            </tr>
        </tbody>
    </table>
    <edit-row @save="edit_index = null" @close="edit_index = null" v-if="edit_index" v-model="value[edit_index]"></edit-row>
</div>
</template>
<script>
import EditRow from './EditRow'
import resizer from 'table-resizer';


export default {
    components: {
        EditRow
    },
    mounted(){
        // let table = document.getElementById('datatable') // get table element
        // resizer.init(table);  // init table resizer
    },
    computed: {
        columns(){
            if(this.value.length == 0){
                return []
            }
            return Object.keys(this.value[0])
        }
    },
    data(){
        return {
            edit_index: null
        }
    },
    props: {
        value: {
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.datatable {
    position: relative;
    thead > tr > th {
        background: #efefef;
    }
    thead {
        // position: fixed;
        top: 0;
        width: 100%;
    }
    
    tr:hover {
        background: #efefef;
    }
    th {
        padding: 10px 5px;
        overflow-y: hidden;
    }
    td {
        padding: 0px 15px !important;
        overflow: hidden;
    }
    th, td {
        overflow: hidden;
        max-width: 300px;
        text-align: center;
        border-right: 1px solid #efefef
    }

}

</style>