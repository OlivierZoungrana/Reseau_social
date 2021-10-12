<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div class="container">
        <router-link to="/" class="navbar-brand">Rézo Groupomania</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
            <li class="nav-item">
              <router-link v-if="isLoggedIn" to="/message" class="nav-link">Poster un message</router-link>
            </li>
          </ul>
        </div>
         
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
            <li class="nav-item"> 
                <a class="nav-link" v-if="isLoggedIn" @click="logout">Logout</a>
                 <router-link v-else to="/login" class="nav-link">Login</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

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
        await  localStorage.removeItem("vuex")
        router.push("/login")
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
