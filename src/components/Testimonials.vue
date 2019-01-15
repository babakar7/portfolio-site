<template>
  <div class="testimonials" id="testimonials">

    <h1 > Testimonials</h1>

    <font-awesome-icon id="prev" icon="chevron-left" size="4x" v-on:click="prev()"
      class="arrow" />


    <transition name="testimonial" mode="out-in">

      <div class="testimonial" v-bind:key="selected">


        <h5 class="name"> {{testimonials[selected].name}} </h5>

        <p class="description">
          {{testimonials[selected].text}}
        </p>


      </div>


    </transition>

    <font-awesome-icon id="next" icon="chevron-right" size="4x" v-on:click="next()"
      class="arrow" />


      <hr  class="separator"/>


  </div>
</template>

<script>
export default {
  data () {
    return {

      testimonials:[{name:'Valentin', text:'"Babakar is the best freelancer I came across in his field. He quickly understood what the client needed and provided the best work. I would totally recommend !"'},
              {name:'Sasha', text:'"Amazing man to work with. I needed a one page responsive website for my startup and he helped me with the coding, WordPress setup and hosting. He went the extra miles and supported me at odd hours to ensure the site is running smoothly everywhere. Showed a lot of patience with all my feedback and revisions. I would highly recommend him to anyone looking for website development work."'},
            {name:'Denis', text:'"Mr. Babakar is very professional, helpful and most importantly he not only do his work but he goes beyond and does more either with his advice or quality of work or delivery before the deadline. It was such a pleasure to work with him."'},
            {name:'Emiljano', text:'"Great and very clear and descriptive in his work. I would highly recommend. Thank you again"'}
          ],



      selected:0
    }
  },

  methods:{
    prev(){
      if(this.selected == 0 ){
        this.selected = this.testimonials.length - 1
      } else {
        this.selected -= 1

      }
    },

    next(){

      this.selected == this.testimonials.length - 1 ? this.selected = 0 :  this.selected += 1


    }
  },

  created(){

    setInterval(() => {

      this.selected < this.testimonials.length - 1 ? this.selected += 1 : this.selected = 0

    }, 5000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media only screen and (max-width:768px){
  .arrow{
    display:none;
  }
  .testimonial{
    width:95%!important;
  }
}

.testimonials{
  padding: 0 50px;
  position:relative;
}

.testimonial{
  width:50%;
  margin: 100px auto 0px;
  text-align:center;
  min-height:200px;
  font-style: italic;
}

.separator{
  margin-top:50px;
  background-image:radial-gradient(circle, rgba(210, 208, 208, 0.190914) 0%, rgba(210, 208, 208, 0) 90%);
  border:none;
  height:2px;
}
.arrow{
  cursor:pointer;
  position:absolute;
  top:40%;

}

#prev{
  left:150px;
}

#next{
  right:150px;
}

.testimonial-enter-active, .testimonial-leave-active{
  transition: all 0.5s;
}

.testimonial-enter, .testimonial-leave-to{
  opacity:0;
}
</style>
