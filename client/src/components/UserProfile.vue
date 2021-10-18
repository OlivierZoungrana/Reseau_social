<template>

<div class="col-xs-6 col-lg-6 form-group container">

    <div>
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Mon Profil">
          <b-card-title class="titre">{{getUsername}}</b-card-title>
          <b-card-text>
           
          </b-card-text>
        </b-card-body>
          <b-button @click="deleteUser" variant="danger">Supprimer Mon Profil</b-button>

      </b-col>
    </b-row>
  </b-card>
</div>
</div>
    
</template>


<script>
import { mapGetters } from 'vuex'


//  const {token} = JSON.parse(localStorage.getItem('vuex'))
// console.log(token)
  export default {

   
      ...mapGetters([
          'token'
      ]),


    computed:{
    

      getUsername: function() {
        return this.$store.getters.username
      },

      // getEmail: function() {
      //   return this.$store.getters.email
      // },


    },
    
    methods:{

      deleteUser(){

        alert("veuillez contactez votre administrateur afin de valider la suppression")
      }
    }

  
  }
</script>


<style  scoped>

.titre{

  text-transform: uppercase;
  size: 2em;
  font-weight: bold;

}

</style>