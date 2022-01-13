<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <section class="Top3books"> 
    <div class="show-cards"> 
        <p style="color:grey">Our Popular Books: </p>  
        <div class="card" style="width: 18rem;" v-for="info in books.slice(0,3)" :key="info.id" >
        <img :src="info.picUrl" alt="#" class="card-img-top">
        <div class="card-body"  >
            <h5 class="card-title" id="card-title"> {{ info.title }} </h5>
            <p class="card-text" id="card-text"> {{ info.descriptions }}</p>
            <router-link :to="{ name: 'OneNote', params: { id: info.id } }" class="btn btn-primary" @click="getBook(info.id)"> More </router-link>
        </div> 
        </div>
    </div>
 </section>
  </div>
</template>

<script>
export default {
  // name: 'HelloWorld',
  props: {
    msg: String
  },
    data() {
        return {
            books: [
                { title: 'Finding Nemo', id: 1,  descriptions: "Lorem", author: "Unknow", picUrl: "../img/findingNemo.jpg" },
                { title: 'There will be none', id: 2,  descriptions: "Lorem lorem lorem", author: "Christie Agatha", picUrl: '../img/AndThenThereWereNone.jpg'},
                { title: 'Bad Blood', id: 3,  descriptions: "LoremvLoremLoremLoremLorem",author: "John Doe", picUrl: '../img/badBlood.jpg'},
                { title: 'The Door Between', id: 4,  descriptions: "teaching you how to use it", author: "Ellery Queen", picUrl: '../img/TheDoorBetween.jpg'},
                
            ],
        }
    },
    methods: {
        getBook(book){
            return (console.log('true, click: ', book))
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.show-cards {
        margin: 1vw 10vw 10vw 10vw; 
        padding: 20px;
    }

    .card {
        display: inline-block;
       
        background:#cfd1da74;
        margin: 1.5vw;
        height: 65vh;
        
    }

    .card-img-top {
        width: 100%;
        height: 70%;
        
    }
</style>
