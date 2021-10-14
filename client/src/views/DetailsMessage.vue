<template>
<div class="details">
    <h2>DETAILS MESSAGE</h2>
    <div class="message-fields">
        <div>
            <MessageUnique
            v-bind:message="message"
            v-bind:key="message"
            />
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


    props: ['message'],

data(){
        return{
            commentaires:[],
            id: this.$route.params.id,
            content:"",
            messages:[],
            title:"",
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
        return  axios.get(`http://localhost:8080/api/messages/${id}`,{
               
          })
          .then((response)=>{
              console.log(response)
                this.message = response.message
                console.log(response.data.title)     

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