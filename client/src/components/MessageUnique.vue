<template>
<div>
  <div>
  <b-card
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
   
     <div class="like">
      <i  class="far fa-thumbs-up fa-2x"></i>
     <i  class="far fa-thumbs-down fa-2x"></i>
     </div>
      <small>{{message.createdAt}}</small> <br>



  </b-card>
  
</div>
</div>
    
</template>


<script>
export default {
   name:'Message',
   props: {
     message:{
       type: Object,

       default: ()=>({})
     }
   }, 
}
</script>


<style scoped>

.like{
  
}

.fa-thumbs-up{
  margin-right: 10px;
}

</style>