<template>
<div class="div">
    
    <div class="container">
        <br>
    <div class="row">
        <div class="col-sm-3"> 
            <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
                <span class="welcome"> Welcome to "{{ this. genre }}" </span>
                <ol class="breadcrumb justify-content-xl-start"> 
                    <li class="breadcrumb-item"><router-link to="/"> <span class="breadcrumb-link"> All Genres </span> </router-link></li>
                    <li class="breadcrumb-item active" aria-current="page"> <span class="breadc-span">{{ this.genre }}</span></li>
                </ol>
            </nav>
        </div>
        <div class="row">
        <div class="col-sm-1">
        </div>
        <div class="col-sm-11 book-info">
            <div class="card" style="width: 18rem; height: auto" v-for="info in res " :key="info.id" >
                <div class="card-info">
                    <img :src="info.picUrl" alt="#" class="card-img-top">
                    <div class="card-body"  >
                        <h5 class="card-title" id="card-title"> {{ info.title }} </h5>
                        <p class="card-text" id="card-text" v-if="info.descriptions"> {{ info.descriptions.slice(0,100) }} ... </p>
                        <router-link :to="{ name: 'OneNote', params: { title: info.title } }" class="btn btn-primary" @click="getBook(info.title)"> More </router-link> 
                    </div> 
                </div>
            </div>
        </div>
        </div>
    </div>
    </div>





</div>

</template>



<script>
import axios from 'axios'

export default {
    props: ['genre'],
    data(){
        return {
            book: null,
            one_genre: null,
            res: [],
        }
    },

    mounted() {
        const baseURL = "http://localhost:3000/notes";

        axios(baseURL).then(response => {
            this.book = response.data 

             this.book.forEach(element =>{ 
                 this.one_genre = element;
                 this.one_genre.genre.forEach(ele => {
                     if(ele == this.genre) {
                         this.res.push(this.one_genre);
                     }
                });
            })
            console.log('ok, this.res: ',this.res)
            
       }).catch(error => console.log(error))
    }
}
</script>


<style scoped>

.breadc-span {
    /* text-transform: capitalize; */
    font-style: italic;

}

.breadcrumb-link {
    color: cadetblue;
}
.book-info {
    /* border:solid; */
    
}
.card {
    display: inline-block;
    height: auto;
    margin-right: 2vw;
}
.card-img-top {
        width: 100%;
        max-height: 390px;
        object-fit: fill;
    }

.welcome {
    /* text-transform: capitalize; */
    color: #aaa;
    font-style: bold;
}



</style>