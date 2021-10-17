<template>

 <div  class="container cardMessage">
    <div class="recents">
        <h2>Récents</h2>
        <!-- <Messages/> -->
    </div>
     <div>
      <h2>Tous les Messages</h2>
      </div>
    <div class="list ">
     
    <Messages 
    v-for="message in messages" 
    v-bind:key="message.id"
    v-bind:message="message"/>
    </div>
 </div>
 
</template>

<script>
import axios from 'axios'
import store from '../store'
// @ is an alias to /src
 import Messages from '../components/Messages'
export default {
  name: 'Home',
  data(){
      return {
        messages: [],
      }
    },
  components: {
    Messages
    
  },

  methods:{
    getMessage(){

         axios.get('http://localhost:8080/api/messages/', {
           headers: {
             authorization: `Bearer ${store.getters.token}`
           }
         })
         .then(response => {
             this.messages = response.data
            
         })
         return this.messages
     },

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
  flex-direction: column;
}

.recents{
  height: 200px;
}

.list{
  display: flex;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 1em;
  align-items: space-between;
}

</style>