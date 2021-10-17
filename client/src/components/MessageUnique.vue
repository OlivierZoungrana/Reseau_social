<template>
<div>
  <div>
  <b-card
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-title >
     {{message.title}}
    </b-card-title>
    <b-card-text >
     {{message.content}}
    </b-card-text>
   <div>
     
   </div>
     <div class="like">
      <i @click="postLike"  class="far fa-thumbs-up fa-2x"><span>{{countLike}}</span></i>
     </div>
      <small>{{message.createdAt}}</small> <br>



  </b-card>
  
</div>
</div>
    
</template>


<script>
import router from '../router'
 const {token} = JSON.parse(localStorage.getItem('vuex'))
import { mapGetters, mapMutations } from 'vuex'
import axios from "axios"
export default {
   name:'Message',
   props: {
     message:{
       type: Object,

       default: ()=>({})
     }
   }, 

   data(){

     return {

       countLike: 0
     }

   },

   methods:{

     ...mapMutations([
        'setUserAuth'

      ]),
      ...mapGetters([
          'token'
      ]),

     postLike(){
             var id = this.$route.params.id

         axios.post(`http://localhost:8080/api/messages/${id}/vote/like`,{
         
        },{
         headers:{"Authorization":`Bearer ${this.token()}`},

        })
        .then((response)=>{
          console.log(token);

            console.log(response)
            // this.setUserAuth(response.data)
            this.$vToastify.success(`Bravo`, 'Like enregistré')
            router.push(`/detailsMessage/${id}`)
        })
        .catch(e=>{
          return e
        })
      },

    
   },

   postDislike(){

     var id = this.$route.params.id

         axios.post(`http://localhost:8080/api/messages/${id}/vote/dislike`,{
         
        },{
         headers:{"Authorization":`Bearer ${this.token()}`},

        })
        .then((response)=>{
          console.log(token);

            console.log(response)
            // this.setUserAuth(response.data)
            this.$vToastify.success(`Bravo`, 'Dislike enregistré')
            router.push(`/detailsMessage/${id}`)
        })
        .catch(e=>{
          return e
        })
      },

}
</script>


<style scoped>

.like{
  
}

.fa-thumbs-up{
  margin-right: 10px;
}

</style>