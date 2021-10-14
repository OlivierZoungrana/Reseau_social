<template>
<div>
   <UserProfile/>
</div>
 

</template>


<script>
 import UserProfile from '../components/UserProfile'
export default {

    data(){
        return{

            name:"olivier",

        }
    },

    computed:{
        propertyName(){
            return this.name
        }

    },

    components:{
         UserProfile
    },

    created(){
        console.log("c'est fait")
        this.name="olivier"
    }
    
}
</script>


<style scoped>

</style>