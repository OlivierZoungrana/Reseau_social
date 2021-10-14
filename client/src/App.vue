<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="navbar-expand-lg navbar-dark  shadow">
      <div class="container">
 <router-link to="/" class="navbar-brand">Rézo Groupomania</router-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav class="">
      
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right class="">
          <!-- Using 'button-content' slot -->
          <template #button-content class="">
            <em v-if="isLoggedIn">User</em>
          </template>
          <b-dropdown-item v-if="isLoggedIn" href="/message">Poster votre message</b-dropdown-item>
          <b-dropdown-item v-if="isLoggedIn" href="/profil">Profil</b-dropdown-item>
          <b-dropdown-item v-if="isLoggedIn" @click="logout" href="#">Déconnexion</b-dropdown-item>
          <b-dropdown-item v-else  href="/login">login</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>

    <div class="container py-5">
      <router-view/>
    </div>

  </div>
</template>

<script>
import router from './router'


  export default {


    created(){
      const token = localStorage.getItem("token")
      if(token)
      this.setToken(token)
    },

    computed:{
      isLoggedIn : function(){
        return this.$store.getters.isAuthenticated
      },

    }, 

    methods:{

     async logout(){
       alert("vous serez deconnecté")
        await  localStorage.removeItem("vuex")
        router.push("/login")
      },

      getName(){

         
      },

      mounted(){
              console.log(this.$store.state.token, this.token())

      }
    }
  
  }

</script>

<style>
.header{
  display: flex;
  padding: 40px;
  justify-content: space-around;
  border-bottom: 3px solid gray;
}

.nav{
  margin-left: 10px;

}


</style>
