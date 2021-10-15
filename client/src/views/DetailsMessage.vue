<template>
<div class="details">
    <h2>DETAILS MESSAGE</h2>
    <div class="message-fields">
        <div>
            <MessageUnique 
            v-bind:message="message"
            >
            
            </MessageUnique>

           
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




data(){
        return{
            commentaires:[],
            id: this.$route.params.id,
            message:{},
          
        }
    },
    components:{
        MessageUnique,
        Commentaire,
        ListCommentaire
    }, 
    
    methods:{

         getOneMessage(){
             var id = this.$route.params.id
        axios.get(`http://localhost:8080/api/messages/${id}`,{
               
          })
          .then(response=>{
               console.log(response)
                this.message = response.data
                // console.log(response.data.title)   
                

          })
          return this.message
        },

         getCommentaire(){
                var id = this.$route.params.id

         axios.get(`http://localhost:8080/api/messages/${id}/coment/`, {
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
        
    },

    mounted(){
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