<template>
    <div :key="task.id" v-for="task in tasks">
    <!-- when you have a list you have to put unique key kao u ovom divu -->
        <Task @delete-task="$emit('delete-task',task.id)" @toggle-reminder="$emit('toggle-reminder',task.id)" :task="task" />
        <!-- u Task komponentu cemo ubaciti pod imenom task (:task) objekt task (="task") iz u ovom slucaju v-for loopa -->
    </div> 
</template>

<script>
import Task from './Task'
    export default {
        name:'Tasks',
        props:{
            tasks:Array,
        },
        components:{
            Task
        },
        emits:['delete-task', 'toggle-reminder'],

    }
</script>

<style>

</style>