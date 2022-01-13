<template>
    <div class="info-container row ">

        <div class="info-container-leftbox col-6 col-md-4" >
            <div class="leftbox-img">
                <img src=""  alt="bookimge" > 

            </div>
        </div>
        <div class="info-container-rightbox col-md-8">
            <div class="rightbox-noteinfo" v-for="info in book" :key="info.id" >
                <div class="book-info-list"  >
                    <ul>
                    <li> {{ info.title }}</li> 
                    <li> Here's the author: {{ info.author }} </li>
                    <li> Year of Publication: {{ info.year }}</li>
                    <li> book des: {{ info.descriptions }}</li>
                    <li> rating: {{ info.rating}}</li>
                    <li>  Read: 
                        <span v-if="!info.isRead" ><i class="fas fa-book"></i></span>
                        <span v-else-if="info.isRead"> <i class="fas fa-book"></i>{{ info.isRead }} <i class="fas fa-book-open"></i> </span>
                    </li>
                    </ul>
                </div>
                <div class="book-ratings">
                </div>

            </div>
        </div>

        <div class="operations-container row">
            <div class="add-new-book">
                 <router-link to="/addnewbook"> <button type="button" class="btn btn-outline-primary " > Add One New Book </button> </router-link> 

            </div>
        </div>

    </div>

    
</template>

<script>
// import addNewBook from '../components/addNewBook.vue'
import axios from 'axios';

export default {
    
   props: ['title'], 
   components: {
    
  },
   data() {
        return {
            book: null 
        
    }
   },
   mounted() {
       const baseURL = "http://localhost:3000/notes";
    //    const bookInfo = this.title;
       
        axios(baseURL).then(response => {
            this.book = response.data
            // var ok = this.book.find(element => element == this.title);
            this.book = Object.values(this.book).filter(item => item.title == this.title)

           console.log('The book should be printed out now !', this.book);
       }).catch(error => console.log(error))

   }
}
</script>

<style scoped>

.info-container {
    border: solid;
    /* background-color:cornflowerblue; */
    padding: 20px;
    margin: 2vh 5vh 2vh 8vh;
    min-height: 70vh ;
}

.leftbox-img {
    margin-top: 3rem;
    background-color:burlywood;
    border:solid;
}

.rightbox-noteinfo {
    border: solid;
    text-align: left;
    padding: 25px;
}

.add-new-book {
    background-color:red;
    border: solid;

    color: cadetblue;
}
</style>