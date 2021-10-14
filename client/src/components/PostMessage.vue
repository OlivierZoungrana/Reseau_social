<template>

 <div class="col-xs-6 col-lg-6 form-group m-auto p-4 shadow rounded">

 <h3>Votre message</h3>
   <form action="">
   <label for="">Titre</label>
   <b-form-input class="carre" v-model="postTitle" type="text"></b-form-input><br>
   <label for="">Contenu</label>
   <b-form-textarea class="carre"   v-model="postContent" type="textarea"></b-form-textarea> <br><br>
   <div class="input-group mb-3">
  <input type="file" class="form-control" id="inputGroupFile02">
  </div>
   </form>
   <b-button variant="primary" v-on:click="postMessage">POSTER MESSAGE</b-button>
  
  </div>

</template>

<script>
import axios from 'axios'
import router from '../router'
import { mapGetters, mapMutations } from 'vuex'
 const {token} = JSON.parse(localStorage.getItem('vuex'))




  export default {
    data(){
      return{
        postTitle:"",
        postContent:"",
      }
    },
    methods: {
      ...mapMutations([
        'setUserAuth'

      ]),
      ...mapGetters([
          'token'
      ]),
      postMessage(){
        axios.post('http://localhost:8080/api/messages/new/',{
          title: this.postTitle,
          content: this.postContent
        },{
         headers:{"Authorization":`Bearer ${this.token()}`},

        })
        .then((response)=>{
          console.log(token);

            console.log(response)
            // this.setUserAuth(response.data)
            this.$vToastify.success(`Bravo`, 'Message enregistré')
            router.push("/")
        })
        .catch(e=>{
          return e
        })
      },
    
    },

    mounted(){

      console.log(this.$store.state.token, this.token())
    }
   
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .form-group{
 }

</style>
