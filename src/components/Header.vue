<template>

  <div>

    <vue-particles color="#dedede" class="particles"></vue-particles>


  <div  class="header">


    <div class="left">

        <div class="headline">

            <h1 class="name"> Babakar Diop </h1>
            <p class="tagline">
              WEB DEVELOPER
            </p>

            <p class="description">
                Hi, I'm a full stack web developer with a focus on building beautilful front-end experiences with Vue.js
            </p>
        </div>
    </div>


    <div class="right">

        <div class="connect">

          <p>
            Want to work with me ? I'm always looking for new challenges. Get in touch!
          </p>

          <div class="touch" v-scroll-to="'#footer'">
            <span>Get in touch</span>

          </div>

        </div>

    </div>

    <font-awesome-icon id="down" icon="chevron-down" size="3x" v-scroll-to="'#portfolio'"/>


  </div>



</div>

</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  methods:{
    down(){
      window.scroll(0, 500 )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header {
  display:grid;
  grid-template-columns: 1fr 1fr;
  height:100vh;
  text-align:center;
  padding-top:25vh;
}

.description{
  padding: 0 20%;
}

.touch{
  border: 1px solid white;
  max-width:50%;
  margin: 0 auto;
  cursor:pointer;
  padding: 5px 0px;
  border-radius:10px;
  margin-top:50px;
  transition: all 0.5s;
}

.touch:hover{
  background-color:white;
  color:black;
  transform:scale(1.2)
}

#down{
  margin: 0 auto;
  position:relative;
  left:50%;
  bottom:70px;
  cursor:pointer;
  transition: all 0.5s;
}


#down:hover{
  transform:scale(1.1);
}

@media only screen and (max-width:768px){

.header{
  grid-template-columns: 1fr;
    }

    #down{
      display:none;
    }

}

.particles{
  position:absolute;
  z-index:-1;
}

</style>
