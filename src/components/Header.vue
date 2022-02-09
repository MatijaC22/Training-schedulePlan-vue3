<template>
    <header>
        <h1>{{title}}</h1>
        <!-- <h1>{{title}}</h1> nacin kako mozes staviti da ide s title u props koji je zakomentiran -->
        <Button v-show="homePage"
                @btn-click="$emit('toggle-add-task')" 
                :text="showAddTask ? 'Close' : 'Add Task'" 
                :color="showAddTask ? 'red' : 'green' "/>
    </header>
</template>

<script>
import Button from './Button'
    export default{
        name:'Header',
        // props: ['title'] pogledaj koment za title
        props:{
            title:String,
            showAddTask:Boolean,
        },
        components:{
            Button
        },
        computed:{
            homePage(){
                if(this.$route.path === '/'){
                    return true
                } else {
                    return false
                }
            }
        }

    }
</script>

<style scoped> 
/* scoped je da sve sto je u ovom styleu je jedino za ovaj 'component' */
    header{
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom:20px;
    }
</style>