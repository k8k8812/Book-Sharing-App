<template>
    <div class="info-container row ">
        <!-- <div class="info-container-leftbox col-6 col-md-2 row-cols-auto" >
            <div class="leftbox-img" v-for="info in book" :key="info.id">
                <img :src="info.picUrl"  alt="bookimge" > 

            </div>
        </div> -->
            <div class="info-container-leftbox col-6 col-md-2 row-cols-auto" >
            <div class="leftbox-img" v-for="info in one_book" :key="info.id">
                <img :src="info.picUrl"  alt="bookimge" > 

            </div>
        </div>
        <div class="info-container-rightbox col-md-6">
            <div class="rightbox-noteinfo" v-for="info in one_book" :key="info.id" >
                <div class="book-info-list"  >
                    <ul> 
                     {{ info.title }} 
                    <li><label> Here's the author:  </label>  {{ info.author }} </li>
                    <li> <label> Year of Publication:  </label> {{ info.year }}</li>        
                    <li > <label> Genre:  </label> <span class="genre-capitalized" v-for="i in info.genre" :key="i.id"> {{ i }}, </span>       
                    </li>
                    <li> <label> Rating: </label> {{ info.rating}}</li>
                    <li> <label> Read: </label>
                        <span v-if="!info.isRead" ></span>
                        <span v-else-if="info.isRead"> {{ info.isRead }}  </span>
                    </li>
                    <li> <label> Description:  </label>{{ info.descriptions }}</li> 
                    </ul>
                </div>
                <div class="book-ratings">
                </div>
                <div class="operation-container">

                    <div class="add-new-book">
                    <router-link to="/addbook"> <button type="button" class="btn btn-primary " > Add One New Book </button> </router-link> 
                    </div>

                    <div class="update-this-book">
                    <router-link  :to="{ name: 'updatenote', params: { id: info._id } }">
                    <button type="button" class="btn btn-secondary " > Update This Book: </button> </router-link>
                    </div>

                    <div class="delete-this-book">
                    <button type="button" class="btn btn-danger " @click="confirmDelete(info)"> Delete Book </button>
                    </div>
                    

                </div>
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
            one_book: null, 
        }
   },
   methods: {
        deleteBook(book){ 
           axios.delete("http://localhost:3000/notes/" + book._id)
           .then(res => {  
            console.log(res);  
            console.log(res.data)
        })
        .catch(error=> console.log('Ooops: ', error))
     },

        confirmDelete(book){
           if(confirm('are you sure? ')){
               console.log('he said yes')
               this.deleteBook(book);
               alert('This Book Has Been Deleted');
               this.$router.go(-1);
           }
           else{
               console.log('he said no');
           }
        }
   },
  
   mounted() {

       const baseURL = "http://localhost:3000/notes"; 
        axios(baseURL).then(response => {
            this.one_book = response.data
            
            this.one_book = Object.values(this.one_book).filter(item => item.title == this.title)
           console.log('The book should be printed out now !', this.one_book);

       }).catch(error => console.log(error))
   }
}
</script>

<style scoped>

.info-container {
   
    /* background-color:cornflowerblue; */
    padding: 20px;
    margin: 2vh 5vh 2vh 8vh;
    min-height: 70vh ;
}

.leftbox-img {
    margin-top: 3rem;
    background-color:rgba(222, 184, 135, 0.27);
    max-height: 100%;
    max-width: 100%;
    text-align: center;
    color:darkgoldenrod;
    border:solid;
    margin-bottom: 5vh;
    
}

.leftbox-img img {
    width:100%;
    height:100%;
}

.rightbox-noteinfo {
    /* border: solid; */
    text-align: left;
    padding: 25px;
    font-family: 'Times New Roman', Times, serif;
    
    
}

.rightbox-noteinfo ul {
    font-style: bold;
    font-size: 25px;
}

.rightbox-noteinfo ul li {
    margin: 3.5px;
    font-size: 22px;
    list-style: none;
    color: grey;
}

.rightbox-noteinfo ul li label {
    color: rgb(162, 160, 160);
    font-style:italic;
    margin-right: 4px;
}

.genre-capitalized  {
   text-transform: capitalize;
}


.add-new-book {
    margin-top: 5vh;
   
}

.operation-container {
    display: inline-block;
    padding: 10px;
    margin-left: 20px;
    min-width: 50%;
    
}

.operation-container button {
    margin: 10px;
    
    
}

</style>