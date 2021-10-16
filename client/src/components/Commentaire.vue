<template>
    <div class="flex-column">
        <form action="">
            <label for="">Votre commentaire</label>
            <b-form-textarea v-model="postCommentaire" class="carre" type="textarea"></b-form-textarea> <br><br>
        </form>
        <b-button variant="primary" v-on:click="postComment">
            
            Enregistrer</b-button>

    </div>
</template>


<script>
import axios from "axios"
import { mapGetters, mapMutations } from 'vuex'
const {token} = JSON.parse(localStorage.getItem('vuex'))

export default {
 data(){
      return{
        
        postCommentaire:"",
      }
    },


    methods:{

        ...mapMutations([
        'setUserAuth'

      ]),
      ...mapGetters([
          'token'
      ]),

        postComment(){
            var id = this.$route.params.id

        axios.post(`http://localhost:8080/api/messages/${id}/coment/new`,{
          comment: this.postCommentaire
        },{
         headers:{"Authorization":`Bearer ${this.token()}`},

        })
        .then((response)=>{
          console.log(token);
            location.reload()
            console.log(response)
            // this.setUserAuth(response.data)
            this.$vToastify.success(`Bravo`, 'Commentaire enregistré')
           
        })
        .catch(e=>{
          return e
        })
    
        },

        mounted(){
        
        }
    } 
}
</script>


<style scoped>

</style>