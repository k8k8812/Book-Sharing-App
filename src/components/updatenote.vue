<template>

<div> 
        <div id="success" >  </div>
         
        <div class="info-container-rightbox col-md-8" >
          

            <div class="rightbox-noteinfo"  >
                <div class="book-info-list"  > 
                    <ul> 
                    <label> Book Title:   </label>
                    <div class="input-group flex-nowrap">
                    <input type="text" class="form-control"  aria-label="Book Title" aria-describedby="addon-wrapping" v-model.lazy.trim="book[0].title"  > 
                    </div>
                    <li><label> Here's the author:  </label><input class="form-control" type="text" placeholder="Author" aria-label="default input example" v-model.trim.lazy="book[0].author" ></li>
                    <li> <label> Year of Publication:  </label> <input class="form-control" type="number" placeholder="Year of Publication" aria-label="default input example" v-model.number="book[0].year"></li>        
                    <li id="genre"> <label> Genre:  </label> 
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Fiction" id="flexCheckDefault" v-model="book[0].genre">
                        <label class="form-check-label" for="flexCheckDefault" >
                            Fiction 
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Thriller" id="flexCheckDefault" v-model="book[0].genre">
                        <label class="form-check-label" for="flexCheckDefault">
                            Thriller 
                        </label>  
                    </div>      
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Documentary" id="flexCheckDefault" v-model="book[0].genre">
                        <label class="form-check-label" for="flexCheckDefault">
                            Documentary 
                        </label> 
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Crime" id="flexCheckDefault" v-model="book[0].genre">
                        <label class="form-check-label" for="flexCheckDefault">
                            Crime
                        </label>  
                    </div>      
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Fantasy" id="flexCheckDefault" v-model="book[0].genre">
                        <label class="form-check-label" for="flexCheckDefault">
                            Fantasy
                        </label>  
                    </div>      
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Sci-Fi" id="flexCheckDefault" v-model="book[0].genre">
                        <label class="form-check-label" for="flexCheckDefault">
                            Sci-Fi
                        </label>  
                    </div>      
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Comic" id="flexCheckDefault" v-model="book[0].genre">
                        <label class="form-check-label" for="flexCheckDefault">
                            Comic 
                        </label>  
                    </div>      
                    <!-- </li> {{ title }} {{ author }} {{ year }} {{ genre }} {{ rating }} {{ read }} -->
                    <li> <div class="col-md-3">
                            <label for="validationCustom04" class="form-label">Rating </label>
                            <select class="form-select" id="validationCustom04" required  v-model.lazy="book[0].rating" >
                            <option selected disabled value="">Choose...</option>
                                <option>5</option>
                                <option>4</option>
                                <option>3</option>
                                <option>2</option>
                                <option>1</option>
                            </select>
                            <div class="invalid-feedback">
                            Please select a valid Rating.
                            </div>
                        </div>
                    </li>
                    <li> <label> Read: </label> 
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="true" id="flexCheckDefault" v-model.lazy="book[0].isRead">
                        <label class="form-check-label" for="flexCheckDefault">
                            Yes  
                        </label>
                    </div>
                    </li>
                    <li> <label>  Description: </label>
                           <div class="input-group">
                            <textarea class="form-control" aria-label="With textarea" v-model.lazy="book[0].descriptions" ></textarea></div>
                    </li> 
                    </ul>
                </div>
                
                <div class="operation-container ">
                    <button type="button" class="btn btn-primary" @click="update" > Update Book </button> 
                    <button type="button" class="btn btn-secondary" @click="go" > Go Back to Previous Page </button> 
                    <!-- <button type="button" class="btn btn-danger "  @click="confirmDelete(info)" > Delete Book </button>  -->
                </div> 
                    
                </div>
        </div>
         
    </div>
    
</template>

<script>

import axios from 'axios'
export default {
    props: ['title'],
    
    data(){
        return {
            book: {
                title: '',
                author: '',
                descriptions: '',
                picUrl:'',
                rating: null,
                year: null,
                isRead: null,
                genre: [],
                
            },
            result: null,
            new_book: null,
            
        }
    },

    methods: {
       
        alertSuccess(){
            var alert_position = document.getElementById('success')
            var message = `Book ${this.book[0].title} Has Been Updated Successfully!`

            var wrapper = document.createElement('div');
            wrapper.innerHTML = '<div id="success" class="alert alert-success" role="alert">' + message 
             + '</div>';
            alert_position.append(wrapper);
            
            setTimeout(()=>{
                wrapper.innerHTML = ''
                alert_position.append(wrapper)
            }, 2000)
        },
        

        updateNote(){
            var update_note = this.book[0];
            const baseURL = "http://localhost:3000/notes/";

            console.warn('the updated: ', update_note)

            
            axios.put(baseURL + this.$route.params.id, update_note).then((response) => {
            console.log(response.data);
            })
        },

        update(){
            if(confirm('Are You Sure to Update? ')){
               
                this.updateNote();
                this.alertSuccess();
                console.log('Book Updated');
                this.$router.go(-1);
            } else {
                alert('Nothing has been added to our database.');
            }
        },
        go(){
            this.$router.go(-1);
        }
        
    },
   
   async mounted(){
       
        console.warn(this.$route.params.id);
        const baseURL = "http://localhost:3000/notes/"; 
        axios(baseURL).then(response => {
            this.result = response.data
        
            this.result = Object.values(this.result).filter(item => item._id == this.$route.params.id)
            // console.log('filtered result: ', this.result)
            var res =JSON.stringify(this.result)
            
            
            this.book = JSON.parse(res)

            console.log(this.book);
        //    console.log('The book should be printed out now !', this.book);

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

.rightbox-noteinfo {
    /* border: solid; */
    text-align: left;
    padding: 25px;
    font-family: 'Times New Roman', Times, serif;
    min-width: 100% ;
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
label {
    color: rgb(162, 160, 160);
    font-style:italic;
    margin-right: 4px;
}

.form-check label {
    font-size: 16px;
}
#genre {
    min-width: 50%;
    display:flex;

}

.operation-container {
    display: inline-block;
    padding: 10px;
    margin-left: 20px;
    min-width: 50%;
    
}

.operation-container button {
    margin-right: 50px;
    

}


</style>