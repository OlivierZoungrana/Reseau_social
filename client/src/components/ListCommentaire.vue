<template>

<b-list-group>
  <b-list-group-item href="#"  class="flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{name}}</h5>
      <small>{{commentaire.createdAt}}</small>
    </div>

    <p class="mb-1">
        {{commentaire.comment}}
    </p>

    <small>yes.</small>
  </b-list-group-item>
</b-list-group>
    
</template>

<script>
export default {

    data(){
        return{
            name:"olivier"
        }
    },

    name:'Commentaire',
    props:['commentaire']
    
}
</script>


<style scoped>

</style>