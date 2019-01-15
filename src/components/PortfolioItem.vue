<template>

    <div class="card">

      <router-link  v-bind:to="{name:'details', params:{id:item.id}}" >

      <div class="img" v-bind:style="backImg">

      </div>

      <div class="description">

          {{item.description}}
      </div>

      </router-link>

    </div>

</template>


<script>


  export default {

    props:{
      item:Object
    },

    data(){
      return{

      }
    },


    computed:{
      backImg(){
        return {backgroundImage: 'url(' + require('../assets/' + this.item.img) + ')'}

      }
    }
  }
</script>


<style scoped>


.card{
  width:320px;
  height:150px;
  border: 1px solid white;
  opacity:0.5;
  transition: all 0.5s;
  cursor:pointer;
  margin: 0px 0px 100px 50px;
  border-radius:10px;


}

.card:hover{
  transform:scale(1.1);
  opacity: 1;
}

.img{
  height:100%;
  width:100%;
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius:10px;

}

.description{
  color:white;

}
</style>
