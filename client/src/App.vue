<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" class="navbar-expand-lg   shadow">
      <div class="container">
 <router-link to="/" class="navbar-brand"><img class="logo" :src="require('./assets/icon-left-font.png')" alt=""></router-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav class="">
      
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown right v-if="isLoggedIn">
          <!-- Using 'button-content' slot -->
          <template #button-content class="">
            <em>{{ getUsername }}</em>
          </template>
          <b-dropdown-item  href="/message">Poster votre message</b-dropdown-item>
          <b-dropdown-item href="/profil">Profil</b-dropdown-item>
          <b-dropdown-item @click="logout" href="#">Déconnexion</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="/login" v-else>login</b-nav-item>
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
import { mapGetters, mapMutations } from 'vuex'


//  const {token} = JSON.parse(localStorage.getItem('vuex'))
// console.log(token)
  export default {

   
      ...mapGetters([
          'token'
      ]),


    created(){
      const token = localStorage.getItem("token")
      if(token)
      this.setToken(token)
    },

    computed:{
      isLoggedIn: function() {
        return this.$store.getters.isAuthenticated
      },

      getUsername: function() {
        return this.$store.getters.username
      },

    }, 

    methods:{
      ...mapMutations([
        'resetAuth'
      ]),
      logout(){
        alert("vous serez deconnecté")
        this.resetAuth()
        router.push("/login")
      },

    

      mounted(){
              // this.getName()
              // console.log(this.$store.state.token, this.token())
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

.logo{
  width: 100px;
  height: 100px;
}

.bg-info{
  background-color: none;
}


</style>
