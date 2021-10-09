<template>

 <div class="col-xs-6 col-lg-6 form-group container">
   <h1>Création de compte</h1>

   <form action="">
   <label class="mail" for="">email</label>
   <b-form-input class="carre"  v-model="postMail" type="text"></b-form-input><br>
   <label for="">Identifiant</label>
   <b-form-input class="carre"   v-model="postUsername" type="text"></b-form-input><br>
   <label for="">Mot de passe</label>
   <b-form-input class="carre" v-model="postPassword" type="password" name="" id=""></b-form-input><br>
   <label for="">Biographie</label>
   <b-form-textarea class="carre"   v-model="postBio" type="textarea"></b-form-textarea> <br><br>
   </form>
        <a href="/login">Vous avez déja un compte</a><br>
   <b-button variant="primary" v-on:click="postPost">REGISTER</b-button>
  <div v-if="postpost">
    {{messages}}
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
        postUsername:"",
        postPassword:"",
        postBio:"",
        messages:[]

      }
    },
    methods: {
      postPost(){
        axios.post('http://localhost:8080/api/users/register',{

          email: this.postMail,
          username: this.postUsername,
          password: this.postPassword,
          bio: this.postBio
        })
        .then((response)=>{
          console.log("succes")
          router.push('/')
          {response}

        })
        .catch(e=>{
          return e
        })

        
        
      }
   
    }
   
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
