<template>
  <div class="hello">

    <section class="Top3books"> 
    <div class="show-cards"> 
        <div class="banner justify-content-lg-start" >
        <p style="color:grey">Our Popular Books: 
        <span class="genre" v-for="item in genre" :key="item.id"> 
            <span>  {{ item }} |  </span> </span>
        </p> 
        </div>

        <div class="card" style="width: 18rem;" v-for="info in book" :key="info.id" >
        <img :src="info.picUrl" alt="#" class="card-img-top">
        <div class="card-body"  >
            <h5 class="card-title" id="card-title"> {{ info.title }} </h5>
            <p class="card-text" id="card-text"> {{ info.descriptions.slice(0,100) }} ... </p>
            <router-link :to="{ name: 'OneNote', params: { title: info.title } }" class="btn btn-primary" @click="getBook(info.title)"> More </router-link>
            
        </div> 
        </div>
    </div>
 </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    props: ['title'],
    data() {
        return {
            book: null,
            genre: ['thriller', 'horror', 'nonfiction', 'mystery', 'documentary']
        }
    },
    methods: {
        getBook(book){
            return (console.log('true, click: ', book))
        },
       
    },
    mounted() {
        const baseURL = "http://localhost:3000/notes";
       
        axios(baseURL).then(response => {
            this.book = response.data
            // this.book = Object.values(this.book).filter(item => item.title == this.title)
           console.log('The book should be printed out now !', this.book);
       }).catch(error => console.log(error))
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.show-cards {
        margin: 1vw 10vw 10vw 10vw; 
        padding: 20px;
        /* border: solid; */
    }
    .card {
        display: inline-block;
        background:#cfd1da74;
        margin: 1.5vw;
        height: auto;
        /* border: solid; */
        
    }

    .card-img-top {
        width: 100%;
        height: 390px;
        object-fit: fill;
    }

</style>
