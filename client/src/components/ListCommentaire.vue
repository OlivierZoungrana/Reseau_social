<template>

<b-list-group>
  <b-list-group-item href="#"  class="flex-column align-items-start mb-3">
    <div class="d-flex w-100 justify-content-between">
      
      <small>{{commentaire.createdAt}}</small>
    </div>

    <p class="mb-1">
        {{commentaire.comment}}
    </p>
  </b-list-group-item>
</b-list-group>
    
</template>

<script>
export default {

    data(){
        return{
            
        }
    },

    name:'Commentaire',
    props:['commentaire']
    
}
</script>


<style scoped>

</style>