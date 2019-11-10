import mysql from 'mysql'
import { stat } from 'fs';

export default {
    namespaced: true,
    state: {
        connection: null,
        sql: null,
        databases: [],
        database: null,
        selectedDB: null, 
        tables: [],
        table: null,
        loading: false,
        error: null,
        project: null
    },
    actions: {
        connectToMysql({state}, {connection, project}){
            state.loading = true
            state.project = project
            state.connection = connection
            
            var sqlConnection = mysql.createConnection({
                host     : connection.host,
                user     : connection.username,
                password : connection.password
              });
            state.sql = connection
            sqlConnection.connect();

            sqlConnection.query('SHOW DATABASES', (e, results, fields) => {
                if(e){
                    this.$store.state.database.error = e
                }
                state.databases = results
                state.loading = false
            });
        },
        async connectToDatabase({state}, database){
            state.loading = true
            state.selectedDB = database
            
            var connection = mysql.createConnection({
                host     : state.connection.host,
                
                user     : state.connection.username,
                password : state.connection.password,
                database
              });
            
               
            connection.connect();
            
            await connection.query(`SELECT table_name FROM information_schema.tables WHERE table_schema = '${database}'`, (e, r) => {
                if(e){
                    this.$store.state.database.error = e
                }
                state.tables = r
                state.loading = false
            })

            state.database = connection
        },
        selectTable({state}, table){
            state.table = table
        },
        unsetTables({state}){
            state.tables = null
        },
        unsetDatabases({state}){
            state.databases = null
        }
    },
}