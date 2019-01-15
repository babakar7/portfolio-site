import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export const store = new Vuex.Store({

  state:{

    portfolioItems: [

      {id:1, git:"https://github.com/babakar7/Movies-Web-App", live:"http://moviephile.surge.sh/", description:"Movie lover web app (Vue.js)", long:"Movie web app that allows you to browse the upcoming, latest, and most popular movies as well as search any movie by keyword using the TMD API.", img:'movie.png', category:'vue', technologies:['Vue.js', 'Vuex', 'Vue Router', 'Rest APIs']},
      {id:2, git:"https://github.com/babakar7/Burger-Builder-React-App", live:"http://myreactburgerbuilder.surge.sh/", description:"Burger Builder app",long:"Burger Builder web app that allows you to build your own burger", img:'burger.png', category:'react', technologies:['React.js', 'Rest APIs']},
      {id:3,git:"https://github.com/babakar7/VueJs-Live-Chat-App", live:"https://chat-ccf57.firebaseapp.com/", description:"Live Chat Web App", long:"Live Chat Web App. Allows you to pick a username and start chatting in real time with anyone using the application" , img:'chat.png', category:'vue', technologies:['Vue.js', 'Vuex', 'Vue Router', 'Firebase']},
      {id:4, git:"https://github.com/babakar7/React-Movie-App", live:"http://moviephilereact.surge.sh/",description:"Movie lover web app (React.js)", long:"Movie web app that allows you to browse the upcoming, latest, and most popular movies as well as search any movie by keyword using the TMD API.",  img:'moviereact.png', category:'react', technologies:['React.js', 'React Router', 'Redux', 'Rest APIs']},
      {id:5,git:"https://github.com/babakar7/NodeJs-Express-E-commerce-store", live:"https://nodestore.herokuapp.com", description:"Ecommerce store with admin panel",long:"Eccommerce app with shopping basket and admin panel that allows you to add, edit and delete products" , img:'nodejs.png', category:'node', technologies:['Node.js', 'Express.js', 'MySQL']},
      {id:6, git:"https://github.com/babakar7/VueJs-Restaurant-Web-App-", live:"https://pizza-2a474.firebaseapp.com/",description:"Restaurant web app", long:"Restaurant web app that allows customers to place an order. Also includes an admin panel to add, delete, edit the menu as well as manage orders", img:'restaurant.png', category:'vue', technologies:['Vue.js', 'Vuex', 'Vue Router', 'Firebase']},
      {id:7, git:"https://github.com/babakar7/Laravel-VueJs-simplified-Airbnb-clone-SPA-", live:"http://myvuebnbapp.herokuapp.com/",description:"Airbnb simplified clone", long:"Airbnb simplified clone. User can view a couple of listings from the mysql database, favorite listings once they are logged in have have those saved to the database.", img:'vuebnb.png', category:'vue', technologies:['Laravel', 'Vue.js', 'Vuex', 'Vue Router', 'Rest APIs']},
      {id:8, git:"https://github.com/babakar7/Vuetify", live:"http://www.vuetify-manager.surge.sh",description:"Project manager", long:"Simple project manager front-end showcasing main features of Vuetify",  img:'vuetify.png', category:'vue', technologies:['Vue.js', 'Vuex', 'Vue Router', 'Vuetify']},
      {id:9, git:"https://github.com/babakar7/Vue-Js-Cryptocurrency-Trading-Game", live:"https://stock-f5380.firebaseapp.com/",description:"Cryptocurrency trading game", long:"Cryptocurrency trading game where you can buy and sell cryptocurrencies. Click END DAY when your transactions are complete to generate new prices.", img:'stock.png', category:'vue', technologies:['Vue.js', 'Vuex', 'Vue Router', 'Firebase']},
      {id:10, git:null, live:"https://www.laparfumeriebordelaise.com/",description:"Perfume store", long:"E-commerce store that sells perfume and accessories. Over 500 products",  img:'perfume.png', category:'wordpress', technologies:['Wordpress', 'Woocommerce', 'PHP']},
      {id:11, git:null, live:"http://acrylicstapler.com/",description:"Stapler factory website", long:"E-commerce store for a factory in China that sells staplers ", img:'stapler.png', category:'wordpress' , technologies:['Wordpress', 'Woocommerce', 'PHP']},
      {id:12, git:null, live:"https://sunuaskan.org/",description:"Non-profit organization", long:"Wordpress website for a non-profit organizaton to collect donation and raise awareness", img:'sunuaskan.png', category:'wordpress',  technologies:['Wordpress', 'PHP']}

    ]


  },

  mutations:{

  },

  getters:{

    getDetails: (state) => (id) => {


      return  state.portfolioItems.find((el)=>{
            return el.id == id
        })
    }

  }




})
