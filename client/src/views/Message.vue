<template>

 <div class="container mess">
     <div>
         <post-message/>
     </div>
     <div>
        <h1>message</h1>
        <b-button @click="getMessage">VOIR</b-button>
     </div>
     
<div class="ordre">

  <b-card
    img-src="https://picsum.photos/600/300/?image=26"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
    v-for="message in messages" v-bind:key="message"
  >
    <b-card-title >
        {{message.title}}
    </b-card-title>
    <b-card-text >
        {{message.content}}
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</div>
 </div>
</template>

<script>
// @ is an alias to /src
 import axios from 'axios';
 import PostMessage from '../components/PostMessage'
export default {
components: {
    PostMessage

},
  data(){
      return{
          messages:[]
      }

  },
 methods: {
 
     getMessage(){

         axios.get('http://localhost:8080/api/messages/')
         .then(response => {
             this.messages = response.data
         })
     },

     mounted(){
      
     }
 }


}
</script>

<style scoped>

.ordre{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.mess{
    display: flex;
    flex-direction: column;
}


</style>