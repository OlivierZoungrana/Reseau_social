<template>
    <div>
        <form action="" class="mb-3">
            <label for="">Votre commentaire</label>
            <b-form-textarea v-model="postCommentaire" class="carre mb-3" type="textarea"></b-form-textarea>
            <b-button variant="primary" v-on:click="postComment">
              Enregistrer
            </b-button>
        </form>

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