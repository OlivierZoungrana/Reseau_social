<template>

 <div class="container mess">
     <div>
         <post-message/>
     </div>
    
 </div>
</template>

<script>
// @ is an alias to /src
 import PostMessage from '../components/PostMessage'
import { mapMutations } from 'vuex'

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
     ...mapMutations([
         'setUserAuth'
     ]),

 
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