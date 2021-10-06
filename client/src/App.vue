<template>
  <div>

    <div class="header"> 
      <div>GOOGLE</div>
    <div class="nav">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/register">Register</router-link>|
      <router-link to="/login">Login</router-link>
    </div>
   
    </div>
 <router-view/>
  </div>

  
  
</template>

<script>


  export default {
  
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
