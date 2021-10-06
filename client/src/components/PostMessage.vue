<template>

 <div class="form-group container">


   <form action="">
   <label for="">Title</label>
   <b-form-input class="carre"   v-model="postTitle" type="text"></b-form-input><br>
   <label for="">Content</label>
   <b-form-textarea class="carre"   v-model="postContent" type="textarea"></b-form-textarea> <br><br>
   </form>
   <b-button variant="primary" v-on:click="postMessage">POST MESSAGE</b-button>
  
  </div>

</template>

<script>
import axios from 'axios'
  export default {
    data(){
      return{
        postTitle:"",
        postContent:"",
      }
    },
    methods: {
      postMessage(){
        axios.post('http://localhost:8080/api/messages/new/',{

          title: this.postTitle,
          content: this.postContent
        })
        .then(response =>{response})
        .catch(e=>{
          return e
        })

        
        
      },
      getMessages(){
        axios.get('http://localhost:8080/api/messages/')
        .then(response => (this.messages = response))
      }
    }
   
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .form-group{
   background-color: rgb(209, 156, 201);
 }

</style>
