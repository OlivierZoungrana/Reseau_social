<template>

 <div class=" col-xs-6 col-lg-6 form-group m-auto p-4 shadow rounded">
      <div class="">
          <h1>S'authentifier</h1>

          <form action="">
          <label class="mail" for="">email</label>
          <b-form-input class="carre"  v-model="postMail" type="text"></b-form-input><br>
          <label for="">Mot de passe</label>
          <b-form-input class="carre" v-model="postPassword" type="password" name="" id=""></b-form-input><br>
          </form>
          <b-button variant="primary" v-on:click="postLogin">Login</b-button>
          <br>
          <router-link to="/register">Nouvel utilisateur</router-link>
      </div>
  </div>

</template>

<script>
import axios from 'axios'
import router from '../router'
 import { mapMutations } from 'vuex'


  export default {
    data(){
      return{
        postMail:'',
        postPassword:"",
        messages:[]

      }
    },
    methods: {
      ...mapMutations([
        'setUserAuth'
      ]),
      postLogin(){
        axios.post('http://localhost:8080/api/users/login',{
          email: this.postMail,
          password: this.postPassword,
        })
        .then((response)=>{
            console.log(response.data)
            let infos = response.data
            infos.username = this.getUsername(response.data.token)
            this.setUserAuth(infos)
            this.$vToastify.success(`Bon retour parmi nous !`, 'Authentification')
            router.push("/")
        })
        .catch(e=>{
          return e
        })
      },
      getUsername(token) {
        let tokenParts = token.split('.')
        let tokenInfos = JSON.parse(atob(tokenParts[1]))
        return tokenInfos.username
      }
  
    }
   
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
