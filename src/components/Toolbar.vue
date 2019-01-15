<template>

<nav class="navbar">

      <div class="title">

        <router-link to="/"><span style="color:white; text-decoration: none">BBD</span></router-link>

      </div>

      <div class="spacer">

      </div>

      <ul class="nav-items">


        <li class="nav-item" v-scroll-to="'#portfolio'">
          PORTFOLIO
        </li>

        <li class="nav-item" v-scroll-to="'#testimonials'">
          TESTIMONIALS
        </li>

        <li class="nav-item" v-scroll-to="'#footer'">
          CONNECT
        </li>


      </ul>

      <div class="hamburger" v-on:click="showMenu">

      </div>
</nav>
</template>


<script>


  export default {

    data(){

      return {

      }
    },

    methods:{
      showMenu(){
          document.querySelector('.nav-items').style.display = 'block'

         let els =   document.querySelectorAll('.nav-item')
         els.forEach((el)=>{
           if(el.style.display == 'none'){
             el.style.display = 'block'
             document.querySelector('.navbar').style.height = 'auto'

           }else {
             el.style.display = 'none'
             document.querySelector('.navbar').style.height = '40px'


           }
         })

      }
    }
  }
</script>


<style scoped>

.navbar{
  display:flex;
  background-color:black;
  color:white;
  position:sticky;
  padding: 10px 0px 0px;
  height:40px;
}

.title{
  color:white;
  text-decoration:none;
  font-weight:bold;
  font-size:18px;
}

.nav-item{
  display:inline-block;
  vertical-align:bottom;
  padding: 0 30px;
  cursor:pointer;
}
.title{
  margin-left:20px;
  cursor:pointer;

}

.nav-items{
list-style:none;
margin-top:0px;
}

.spacer{
  flex-grow:0.8;
}

.hamburger{
  display:none;
}


@media only screen and (max-width:830px){
  .hamburger{
    display:inline-block;
    position:absolute;
    right:20px;
  }

  .nav-items{
    display:none;
  }

  .navbar{
  }
}




</style>
