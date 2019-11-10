<template>
  <div class="modal" style="display: block">
        <div class="header">
            <div class="close" @click="close">
                <i class="fa fa-close"></i>
            </div>
            <div class="title">
                Edit row with id: {{value.id}}
            </div>
        </div>
        <div class="body">
            <div class="form-input" v-for="(column, i) in value" :key="i">
                <label>{{i}}</label>
                <input type="text" v-model="value[i]">
            </div>
        </div>
        <div class="actions text-right">
            <button class="button is-md flat" @click="close">cancel</button>
            <button class="button is-md primary" @click="save">Save</button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        value: {
            required: true
        }
    },
    data(){
        return {
            original: {...this.value}
        }
    },
    mounted(){
        this.original = this.value
    },
    methods: {
        close(){
            this.$emit('input', this.original)
            this.$emit('close')
        },
        save(){
            this.$emit('save')
        }
    }
}
</script>