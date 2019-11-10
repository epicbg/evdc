<template>
<div>
    <aside class="nav-aside dark fixed">
        <div class="progress" v-if="loading">
            <div class="loading-bar white"></div>
        </div>
        <div v-if="!databases && !tables">
            
            <a @click="projectModal = true" class="mb-2 mt-1"><i class="fa fa-plus mr-3"></i> Add project</a>
            <div class="link-dropdown" v-for="(project, i) in projects" :key="i">
                <a><i class="fa fa-file-o mr-1"></i> {{project.name}}</a>
                <div class="dropdown" style="display: block">
                    <a v-for="(connection, ci) in project.connections" :key="ci"  @click="connectToMysql({connection, project})">
                        <i class="fa fa-retweet mr-1"></i> 
                        {{connection.name}}
                    </a>
                </div>
            </div>
        </div>
        <div v-if="databases && !tables">
            <a @click="unsetDatabases"><i class="fa fa-chevron-left mr-4"></i> GO BACK TO PROJECTS</a>
            <div v-for="(db, di) in databases" :key="di" @click="connectToDatabase(db.Database)">
                <a><i class="fa fa-database mr-2"></i> {{db.Database}}</a>
            </div>
        </div>
        <div v-if="tables">
            <a @click="unsetTables"><i class="fa fa-chevron-left mr-4"></i> GO BACK TO DATABASES</a>
            <div v-for="(table, ti) in tables" :key="ti" @click="connectToTable(table)">
                <a><i class="fa fa-table mr-2"></i> {{table.table_name}}</a>
            </div>
        </div>
        <div class="progress" v-if="loading">
            <div class="loading-bar white"></div>
        </div>
    </aside>
    

    <project-modal v-show="projectModal" @close="projectModal = false"></project-modal>


</div>
</template>
<script>
import ProjectModal from './ProjectModal'
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
    components: {
        ProjectModal
    },
    data(){
        return {
            projectModal: false
        }
    },
    computed: {
        ...mapGetters('projects', [
            'projects'
        ]),
        ...mapState('database', [
            'databases', 'tables', 'loading'
        ])
    },
    methods: {
        ...mapActions('database', [
            'connectToMysql', 'unsetDatabases', 'connectToDatabase', 'unsetTables', 'selectTable'
        ]),
        connectToTable(table){
            this.$store.state.database.loading = true
            this.selectTable(table.table_name)
            this.$router.push({'path': '/table/' + table.table_name})
        }
    }
}
</script>