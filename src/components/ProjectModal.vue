<template>
    <div class="modal" style="display: block">
        <div class="header">
            <div class="close" @click="$emit('close')">
                <i class="fa fa-close"></i>
            </div>
            <div class="title">
                Project manager
            </div>
        </div>
        <div class="body">
            <div class="form-input">
                <label>Project name</label>
                <input type="text" v-model="project.name">  
            </div>
            <div class="mt-4">
                <div v-for="(connection, i) in project.connections" :key="i">
                    <div class="card">
                        <div class="headline">{{i + 1}}. {{project.connections[i]['name']}}</div>
                        <div class="text">
                            <div class="form-input">
                                <label>Connection name</label>
                                <input type="text" v-model="connection.name">
                            </div>
                            <div class="form-input">
                                <label>Connection host</label>
                                <input type="text" v-model="connection.host">
                            </div>
                            <div class="form-input">
                                <label>Connection username</label>
                                <input type="text" v-model="connection.username">
                            </div>
                            <div class="form-input">
                                <label>Connection password</label>
                                <input type="text" v-model="connection.password">
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
            <button class="button secondary" style="width: 100%" @click="addConnection"><i class="fa fa-plus"></i></button>
        </div>
        <div class="actions text-right">
            <button class="button is-md flat" @click="$emit('close')">cancel</button>
            <button class="button is-md primary" @click="save(project) && $emit('close')">Save</button>
        </div>
    </div>
</template>
<script>
import {defaultConnectionStructure} from './../helper'
import { mapActions } from 'vuex'
export default {
    data(){
        return {
            project:{
                name: '',
                connections: [defaultConnectionStructure]
            }
        }
    },
    methods: {
        addConnection(){
            this.project.connections.push(defaultConnectionStructure)
        },
        ...mapActions('projects', [
            'save'
        ])
    },
    props: {
        value: {
            required: false,
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style lang="scss">
.form-input {
    display: flex;
    flex-direction: column;

    input {
        border: none;
        border-bottom: 1px solid black;
    }

    label {
        font-size: 17px;
        font-weight: bold;
        margin-top: 10px;
    }
}
</style>