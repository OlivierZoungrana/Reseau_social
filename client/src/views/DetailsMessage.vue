<template>
<div class="details">
    <h2>DETAILS MESSAGE</h2>
    <div class="message-fields">
        <div>
            <MessageUnique/> 
        </div>
        <div class="comment">
            <Commentaire/>
        </div>
    </div>
   <div class="list-comment">
       <ListCommentaire
       v-for="commentaire in commentaires"
       v-bind:key="commentaire.id"
       v-bind:commentaire="commentaire"
       />
   </div>
</div>
</template>

<script>
import axios from 'axios'
import MessageUnique from '../components/MessageUnique'
import Commentaire from '../components/Commentaire'
import ListCommentaire from '../components/ListCommentaire'
import store from '../store'

export default {

    components:{
        MessageUnique,
        Commentaire,
        ListCommentaire
    }, 

    data(){

        return{
            commentaires:[]
        }

    },
    methods:{

         getOneMessage(){
          axios.get('http://localhost:8080/api/messages/:id')
          .then((response)=>{
              console.log(response)
           
          })
        },

         getCommentaire(){

         axios.get('http://localhost:8080/api/messages/:messageId/coment/', {
           headers: {
             authorization: `Bearer ${store.getters.token}`
           }
         })
         .then(response => {
             this.commentaires = response.data
            
         })
         return this.commentaires
     },
    }, 

    created(){
        this.getOneMessage()
        this.getCommentaire()
    }
    
}
</script>


<style scoped>
.message-fields{
    display: flex;
    justify-content: space-between;
}

.details{
    display: flex;
    flex-direction: column;
    align-content: space-between;
}
</style>