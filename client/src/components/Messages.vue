<template>

 <div>
   
     
<!-- <b-button @click="getMessage">VOIR</b-button> -->
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

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</div>
 </div>
</template>

<script>
// @ is an alias to /src
export default {
    name:'Message',
    props: ['message'],
  
}
</script>

<style scoped>


</style>