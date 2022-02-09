<template>
    <button @click="onClick()" :style="{background:color}" class="btn"> {{text}} </button>
    <!-- @click je isto sto i v-on:click pozivanje eventa -->
    <!-- :style="{background:color}" uzim v-in od props color sto je string stavljamo u viticaste zagrade i onda iz headera uzimamo green kao boju -->
</template>

<script>
    export default{
        name:'Button',
        props:{
            text:String,
            color:String,
        },
        methods:{
            onClick(){
                this.$emit('btn-click')
            }
        }

    }
</script>

