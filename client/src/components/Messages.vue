<template>

 <div>
   
     
<!-- <b-button @click="getMessage">VOIR</b-button> -->
<div>

  <!-- <b-card
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

    <b-button @click="getOneMessage"  href="/DetailsMessage" variant="primary">Plus de Détails</b-button>
  </b-card> -->
<div class="card mb-1" style="max-width: 1000px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://picsum.photos/600/300/?image=25" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{message.title}}</h5>
        <p class="card-text">{{message.content}}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        <router-link :to="{ name:'DetailsMessage', params:{id:id}}" class="btn btn-primary">Voir Plus</router-link>
      </div>
    </div>
  </div>
</div>
</div>
 </div>
</template>

<script>

// @ is an alias to /src
export default {
    name:'Message',
    props: ['message'],
  data(){
    return {
       id: this.$route.params.id
    }

  },
    methods:{

      getToken(){
         const {token} = JSON.parse(localStorage.getItem('vuex'))
 
          return {token}
      }


  
      
   
    }
  
}
</script>

<style scoped>


</style>