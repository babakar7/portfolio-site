<template>
  <div>

    <Toolbar></Toolbar>


    <Header/>

    <Portfolio/>

    <Testimonials/>

    <Footer/>


  </div>
</template>

<script>


import Toolbar from './Toolbar'
import Header from './Header'
import Portfolio from './Portfolio'
import Testimonials from './Testimonials'
import Footer from './Footer'

export default {
  components:{
      Toolbar,
      Header,
      Portfolio,
      Testimonials,
      Footer
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
