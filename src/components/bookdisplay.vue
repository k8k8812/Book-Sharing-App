<template>
  <div class="hello">

    <section class="Topbooks"> 
        <div class="show-cards"> 
            <div class="banner justify-content-lg-start" >
            <p class='text' style="color:grey">Our Popular Books: 
                <!-- <searchbygenre /> -->
            <span class="genre" v-for="item in genre_name" :key="item.id"> 
                <router-link style="text-decoration:none;" :to="{ name: 'searchbygenre', params: { genre: item }}"> <span id="genre-link">  {{ item }}  | </span> </router-link> </span>
            </p> 
            </div>

            <div class="card" style="width: 18rem; height: auto" v-for="info in book" :key="info.id" >
            <img :src="info.picUrl" alt="#" class="card-img-top">
            <div class="card-body"  >
                <h5 class="card-title" id="card-title"> {{ info.title }} </h5>
                <p class="card-text" id="card-text" v-if="info.descriptions"> {{ info.descriptions.slice(0,100) }} ... </p>
                <router-link :to="{ name: 'OneNote', params: { title: info.title } }" class="btn btn-primary" @click="getBook(info.title)"> More </router-link>
            </div> 
            </div>
        </div>
 </section>
  </div>
</template>

<script>
import axios from 'axios'
import searchbygenre from '@/components/searchbygenre.vue'

export default {
    props: ['title'],
    components: {
        searchbygenre
    },
    data() {
        return {
            book: null,
            genre_name: ['Fiction','Thriller','Documentary', 'Crime','Fantasy','Sci-Fi','Comic', 'Whodunit'],
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

<style scoped>

#genre-link {
    font-style: italic;
    color: #aaa;
    font-family: Georgia, 'Times New Roman', Times, serif;
    margin-right: 2px;
    padding: 3px;
}
.show-cards {
        margin: 1vw auto 10vw; 
        padding: 20px;
        max-width: 80%;
        min-height: 70%;

       
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
        max-height: 390px;
        object-fit: fill;
    }

    .genre {
        text-decoration: none;
        font-style: bold;
        font-size: 15px; 
    }

</style>
