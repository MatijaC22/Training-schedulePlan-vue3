<template>
    <div @dblclick="$emit('toggle-reminder',task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
        <!-- dblclick nacin radenja emit funkcije je isto sto i opcija za on delete funkciju -->
        <h3>
            {{task.text}}
            <fa class="fas" @click="onDelete(task.id)" icon="times"/>
        </h3>
        <p> {{task.day}}</p>
    </div>
</template>

<script>
    export default {
        name:'Task',
        props:{
            task:Object,
        },
        methods: {
            onDelete(id){
                this.$emit('delete-task', id) 
                // u funkciji onDelete mi stvaramo emit koji pod nasim novim imenom
                // delete-task uzima id od taska kada kliknemo na jedan od taskova
            }
        }
    }
</script>

<style>

    .fas{
        
        color:red;
        
    }
    .task{
        background: #f4f4f4;
        margin: 5px;
        padding: 10px 20px;
        cursor: pointer; 
    }
    .task.reminder{
        border-left:5px solid green;
    }
    .task h3{
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
</style>
