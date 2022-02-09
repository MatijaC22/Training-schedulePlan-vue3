<template>
    
    <AddTask v-show="showAddTask"
             @add-task="addTask"/>
    
    <Tasks @delete-task="deleteTask" 
           @toggle-reminder="toggleReminder" 
           :tasks="tasks" 
    />
</template>

<script>
    import Tasks from '../components/Tasks'
    import AddTask from '../components/AddTask'

    export default{
        name:'Home',
        props:{
            showAddTask: Boolean,
        },
        components:{
            Tasks,
            AddTask
        },
        data(){
            return{
                tasks: [],
            }
        },
        methods:{
            async addTask(task){
                const res = await fetch('api/tasks', {
                    method:'POST',
                    headers:{
                    'Content-type': 'application/json',
                
                },
                body:JSON.stringify(task),
                })
                const data = await res.json()

                this.tasks = [...this.tasks, data]
            },
            // deleteTask(id){
            //   console.log('task',id)
            //   if(confirm('Are you sures?')){
            //     this.tasks = this.tasks.filter((task) => task.id !== id)
            //     //uzmi tasks arry i izfiltriraj sve taskove koji nemaju taj id( prepis tasksa bez oznacenog id-a)
            //   }
            // },
            async deleteTask(id){
                if(confirm('Are you sure?')){
                const res = await fetch(`api/tasks/${id}`,{
                method:'DELETE',
                })

                res.status === 200 ?
                (this.tasks = this.tasks.filter((task)=> task.id !==id)) : alert('Error deleting task')      
                }
            // === if; ? then; : else
            },
            // toggleReminder(id){
            //   this.tasks = this.tasks.map((task)=>task.id===id ? {...task,reminder: !task.reminder}:task)
            //   // map() = manipulacija polja 
            //   // novi tasks (this.tasks) ce izgledati = map( za svaki task) pogledaj id i usporedi s id-em koji ulazi u funkciju (task.id===id)
            //   //ako je jednak, (?)  vrati novi inicijalizirani tasks gjde ce biti zamnjenjen svaki task(...task) u kojem reminder nije isti kao u task reminderu
            // },
            async toggleReminder(id){
                const taskToToggle = await this.fetchTask(id)
                const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
            
                const res = await fetch(`api/tasks/${id}`, {
                method: 'PUT',
                headers:{
                'Content-type':'application/json'
                },
                body: JSON.stringify(updTask),
                // JSON.stringify - method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.
                })
            
                const data = await res.json()

                this.tasks = this.tasks.map((task)=>task.id===id ? {...task,reminder: data.reminder}:task)
            
            },
            async fetchTasks(){
                //const res = await fetch('http://localhost:5000/tasks')
                const res = await fetch('api/tasks')

                const data = await res.json()

                return data
            },
            async fetchTask(id){
                // const res = await fetch(`http://localhost:5000/tasks/${id}`)
                const res = await fetch(`api/tasks/${id}`)
                const data = await res.json()

                return data
            },
        },
        async created(){
        this.tasks = await this.fetchTasks()
        },
    }
</script>