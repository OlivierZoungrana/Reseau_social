<template>

 <div class=" col-xs-6 col-lg-6 form-group container  col-md-auto">
      <div class="">
          <h1>S'authentifier</h1>

          <form action="">
          <label class="mail" for="">email</label>
          <b-form-input class="carre"  v-model="postMail" type="text"></b-form-input><br>
          <label for="">Mot de passe</label>
          <b-form-input class="carre" v-model="postPassword" type="password" name="" id=""></b-form-input><br>
          </form>
          <b-button variant="primary" v-on:click="postLogin">Login</b-button>
      </div>
  </div>

</template>

<script>
import axios from 'axios'
import router from '../router'


  export default {
    data(){
      return{
        postMail:'',
        postPassword:"",
        messages:[]

      }
    },
    methods: {
      postLogin(){
        axios.post('http://localhost:8080/api/users/login',{

          email: this.postMail,
          password: this.postPassword,
        })
        .then((response)=>{
            console.log("Log in")
            router.push("/")
            {response}
        })
        .catch(e=>{
          return e
        })

        
        
      },
  
    }
   
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .form-group{
   background-color: rgb(124, 48, 108);
 }

 .log{
 
 
 }



</style>
