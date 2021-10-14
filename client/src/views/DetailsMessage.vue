<template>
<div>
    <message-unique/>
</div>
</template>

<script>
import axios from 'axios'
import MessageUnique from '../components/MessageUnique'
export default {

    components:{
        MessageUnique  
    }, 
    methods:{

         getOneMessage(){
          axios.get('http://localhost:8080/api/messages/:id')
          .then((response)=>{
              console.log(response)
           
          })
        }
    }, 

    created(){
        this.getOneMessage()
    }
    
}
</script>


<style scoped>

</style>