<template>
<div>
    <div class="alert danger" v-if="error"></div>
    <datatable v-model="rows"></datatable>
</div>
</template>
<script>
import datatable from './../components/Datatable'
import { mapState } from 'vuex';
export default {
    components: {
        datatable
    },
    name: 'sqltable',
    mounted(){
        this.init()
    },
    methods: {
        init(){
            this.database.query('select * from ' + this.table, (e, r) => {
                if(e){
                    this.$store.state.database.error = e
                }
                this.rows = r 
                this.$store.state.database.loading = false
            })
        }
    },
    data(){
        return {
            rows: []
        }
    },
    computed: {
        ...mapState('database', [
            'database', 'table', 'loading', 'error'
        ]),
        fields(){
            if(!this.rows || this.rows.length == 0){
                return []
            }
            return Object.keys(this.rows[0])
        }
    },
    watch: {
        '$route.params': function (table) {
            this.$store.state.database.table = table.name
            this.init()
        }
    }
}
</script>