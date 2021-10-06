<template>

 <div  class="container cardMessage">
   <Messages 
   v-for="message in messages" 
   v-bind:key="message.id"
   v-bind:message="message"/>
 </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
 import Messages from '../components/Messages'
export default {
  name: 'Home',
  data(){
      return {
        messages: []
      }
    },
  components: {
    Messages,
    
  },

  methods:{
    getMessage(){

         axios.get('http://localhost:8080/api/messages/')
         .then(response => {
             this.messages = response.data
            
         })
         return this.messages
     }

  },

  created(){
    this.getMessage()
    console.log(this.messages)
  }
}
</script>

<style scoped>

.cardMessage{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 1em;
}

</style>