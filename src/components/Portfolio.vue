<template>
  <div class="portfolio" id="portfolio">

    <h1> Portfolio </h1>

    <div class="tabs">

        <h1 v-on:click="changeCategory('all')" v-bind:class="{selected :  categorySelected == 'all' }"> All </h1>
        <h1 v-on:click="changeCategory('vue')" v-bind:class="{selected :  categorySelected == 'vue' }">  Vue.js </h1>
        <h1 v-on:click="changeCategory('react')" v-bind:class="{selected :  categorySelected == 'react' }"> React.js </h1>
        <h1 v-on:click="changeCategory('wordpress')" v-bind:class="{selected :  categorySelected == 'wordpress' }"> Wordpress </h1>

    </div>

    <font-awesome-icon id="prev" icon="chevron-left" size="4x" v-on:click="prev()"
      v-bind:class="[{disabled : itemsInCategory.length <= 6} , 'arrow']"   />

      <transition-group name="items" mode="out-in" tag="div" class="items">

        <PortfolioItem v-for="item in itemsToDisplay" v-bind:item="item"   v-bind:key="item.id"/>

      </transition-group>

      <font-awesome-icon id="next" icon="chevron-right" size="4x" v-on:click="next()"
        v-bind:class="[{disabled : itemsInCategory.length <= 6} , 'arrow']" />

        <hr class="separator"/>
  </div>
</template>

<script>
import PortfolioItem from './PortfolioItem'

export default {
  components:{
    PortfolioItem
  },
  data () {
    return {

      portfolioItems: [],

      categorySelected:'all',

      start: 0,

      end:6
    }
  },

  computed:{
    itemsToDisplay(){

      if (this.categorySelected == 'all') return this.portfolioItems.slice(this.start, this.end)

        return this.portfolioItems.filter((el)=>{
                 return el.category == this.categorySelected
              }).slice(this.start,this.end)
    },

    itemsInCategory(){

      if(this.categorySelected == 'all') return this.portfolioItems

      return this.portfolioItems.filter((el)=>{
               return el.category == this.categorySelected
            })
    }

  },

  methods:{
    prev(){

        if( this.itemsInCategory.length <= 6 ) return

       if(this.start == 0 ){
         this.start = this.portfolioItems.length - 6
         this.end = this.portfolioItems.length
       } else {
         this.start -= 1
         this.end -= 1
       }
    },

    next(){

      if( this.itemsInCategory.length <= 6) return


      if(this.end == this.portfolioItems.length){
        this.start = 0
        this.end = 6
      } else {
        this.start += 1
        this.end += 1
      }
    },

    changeCategory(category){
      this.start = 0
      this.end = 6
      this.categorySelected = category
    }
  },

  created(){
    this.portfolioItems = this.$store.state.portfolioItems
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.portfolio{
  padding: 0 50px;
  position:relative;
  margin-bottom:100px;
}

.selected{
  background-color:white;
  color:black;

}

.tabs{
  display:flex;
  width:50%;
  margin: 0 auto 50px;


}

.tabs h1 {
  margin-left:30px;
  opacity:0.5;
  cursor:pointer;
  border: 1px solid white;
  padding: 1px 5px;
  transition: transform 0.5s;

}

.tabs h1:hover{
  transform:scale(1.1);
  background-color:white;
  color:black;
}


.items{
  display:flex;
  flex-wrap: wrap;
}

.separator{
  margin-top:50px;
  background-image:radial-gradient(circle, rgba(210, 208, 208, 0.190914) 0%, rgba(210, 208, 208, 0) 90%);
  border:none;
  height:2px;
}


.items-enter-to, .items-leave{
  opacity:0.5;
}

.items-enter, .items-leave-to{
  opacity:0!important;
  position:absolute;
  transform:translateY(50px);
}

.items-move{
  transition: transform 0.3s;
}

.arrow{
  cursor:pointer;
  position:absolute;
}

.disabled{
  opacity:0.1;
}

#prev{
  top:50%;
  left:20px;
}
#next{
  top:50%;
  right:20px;
}

@media only screen and (max-width:768px){
  .tabs{
    display:none;
  }
}


</style>
