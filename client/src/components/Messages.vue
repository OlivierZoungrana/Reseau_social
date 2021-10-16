<template>

 <div>
   
     
<div>


  <b-card no-body class="overflow-hidden" style="max-width: 540px; max-height: 540px">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body class="" title="">
            <b-card-title >
              {{message.title}}
             </b-card-title>
            <b-card-text class="text-truncate" >
              {{message.content}}
            </b-card-text>
              <router-link :to="{ name: 'detailsmessage', params: {id:message.id}}" class="btn btn-primary">Plus de Détails</router-link>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>

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
/* .text-content{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-content:hover{
  overflow: visible;
} */

</style>