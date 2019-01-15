<template>
<div class="details-wrap">

<router-link to="/">

  <font-awesome-icon id="prev" icon="chevron-left" size="4x"  />

</router-link>

<h1 style="text-align:center"> Overview</h1>

  <div class="details">

    <div class="left ">


      <div class="technologies">

        <h3>Technologies:</h3>

        <div class="items">
          <div v-for="tech in details.technologies " class="tech">

            {{tech}}

          </div>
        </div>



      </div>


      <div class="ctas">

  <div>

 <a v-bind:href="details.live" target="_blank" class="live">  <span class="cta" >VISIT PROJECT </span> </a>
</div>

<div>

 <a v-show="details.git" v-bind:href="details.git" target="_blank" class="live">  <span class="cta" >VIEW CODE </span> </a>

</div>

      </div>
    </div>

    <div class="right">

      <div class="img" v-bind:style="!showDescription ? backImg : '' "  v-on:mouseover="showDescription = true"  v-on:mouseleave="showDescription = false">

          <div class="long">
            {{showDescription ?  details.long : ''}}

          </div>

      </div>

    </div>

  </div>

</div>
</template>


<script>

export default {
  data(){
    return {

      details:{},
      showDescription: false

    }
  },

  computed:{
    backImg(){
     return   {backgroundImage:'url(' + require('../assets/' + this.details.img)+ ')'}
    }
  },

  methods:{

  },

  created(){

     this.details  =  this.$store.getters.getDetails(this.$route.params.id)

  }
}

</script>


<style scoped>

#prev{
  position:absolute;
  left:20px;
  color:white;
}


@media only screen and (max-width:768px){
  .details{
    grid-template-columns: 1fr!important;

  }

  .cta{
    margin-left:0px!important;
    margin-bottom:10px!important;

  }

}

.details{
  display:grid;
  grid-template-columns: 1fr 1fr;
  text-align:center;
  height:100vh;
  margin: 50px 0;
}

.details-wrap{
  padding-top:25px;
}

.img{
  height:50%;
  background-size:cover;
  background-position: center center;
  background-repeat: no-repeat;
  opacity:0.8;
  transition: all 0.5s;
  width:90%;


}

.img:hover{
  transform:scale(1.1);
  opacity:1;
}

.tech{
  border: 1px solid white;
  padding: 2px 10px;
  margin-left:10px;
  transition: all 0.5s;
  cursor:pointer;
}

.tech:hover{
  background-color:white;
  color:black;
  transform:scale(1.2);

}

.items{
  display:flex;
  justify-content:center;
  margin-top:50px;
}

.ctas{
  margin:100px;
}

.cta{
  border: 1px solid white;
  margin-left:50px;
  padding: 2px 5px;
  transition: all 0.5s;
  cursor:pointer;
  border-radius:5px;
  font-size:18px;
  background-color:white;
  color:black;
  font-weight:500;
}

.cta:hover{
  background-color:black;
  color:white!important;
}

.long{
  padding: 10% 0;
}

.live{
  text-decoration:none;
}



</style>
