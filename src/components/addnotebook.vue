<template>
    <div> 
        <div id="success"> </div> 
        <div class="info-container-rightbox col-md-8">
          
            <div class="rightbox-noteinfo" >
                <div class="book-info-list"  >
                    <ul> 
                    <label> Book Title: </label>
                    <div class="input-group flex-nowrap">
                    <input type="text" class="form-control" placeholder="Book Title" aria-label="Book Title" aria-describedby="addon-wrapping" v-model.lazy.trim="book.title">
                    </div>
                    <li><label> Here's the author:  </label><input class="form-control" type="text" placeholder="Author" aria-label="default input example" v-model.lazy.trim="book.author"> </li>
                    <li> <label> Year of Publication:  </label> <input class="form-control" type="number" placeholder="Year of Publication" aria-label="default input example"  v-model.number="book.year"></li>        
                    <li id="genre"> <label> Genre:  </label> 
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Fiction" id="flexCheckDefault" v-model="book.genre">
                        <label class="form-check-label" for="flexCheckDefault" >
                            Fiction 
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Thriller" id="flexCheckDefault" v-model="book.genre">
                        <label class="form-check-label" for="flexCheckDefault">
                            Thriller 
                        </label>  
                    </div>      
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Documentary" id="flexCheckDefault" v-model="book.genre">
                        <label class="form-check-label" for="flexCheckDefault">
                            Documentary 
                        </label> 
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Crime" id="flexCheckDefault" v-model="book.genre">
                        <label class="form-check-label" for="flexCheckDefault">
                            Crime
                        </label>  
                    </div>      
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Fantasy" id="flexCheckDefault" v-model="book.genre">
                        <label class="form-check-label" for="flexCheckDefault">
                            Fantasy
                        </label>  
                    </div>      
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Sci-Fi" id="flexCheckDefault" v-model="book.genre">
                        <label class="form-check-label" for="flexCheckDefault">
                            Sci-Fi
                        </label>  
                    </div>      
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Comic" id="flexCheckDefault" v-model="book.genre">
                        <label class="form-check-label" for="flexCheckDefault">
                            Comic 
                        </label>  
                    </div>      
                    <!-- </li> {{ title }} {{ author }} {{ year }} {{ genre }} {{ rating }} {{ read }} -->
                    <li> <div class="col-md-3">
                            <label for="validationCustom04" class="form-label">Rating </label>
                            <select class="form-select" id="validationCustom04" required v-model="book.rating">
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
                        <input class="form-check-input" type="checkbox" value="true" id="flexCheckDefault" v-model="book.isRead">
                        <label class="form-check-label" for="flexCheckDefault">
                            Yes  
                        </label>
                    </div>
                    </li>
                    <li> <label>  Description: </label>
                           <div class="input-group">
                            <textarea class="form-control" aria-label="With textarea" v-model="book.descriptions"></textarea></div>
                    </li> 
                    <li><label> Upload an Image </label> </li>
                        <li><div class="image">
                            <input type="file" name="book-img" >
                            <button type="button" class="btn btn-secondary btn-dark"
                            value="send" > Upload </button>
                            </div></li>
                    </ul>
                </div>
                
                <div class="operation-container ">
                    <button type="button" class="btn btn-primary" @click="add" :disabled="isDisable"> Add One New Book </button> 
                    <router-link to="/"><button type="button" class="btn btn-secondary" > Go Back to Previous Page </button> </router-link>
                    <!-- <button type="button" class="btn btn-danger "  @click="confirmDelete(info)" > Delete Book </button>  -->
                </div> 
                    
                </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
// import { defineComponent } from '@vue/composition-api'

export default {
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
            all_notes: null,
        }
    },

    methods: {
        check_title(){
            
            let book_title = this.book.title.toUpperCase();
            let same_title = false;

            this.all_notes.forEach(element => {
                if(element.title.includes(book_title)){
                    same_title = true;
                    
                }
            });
            if (same_title == true){
                console.log('Sorry Same Title');
                alert("Same Title Book Can't Be Added. ")
                return false
            }
            console.warn("is it the same title: ", same_title)
        },

        addnote(){
            const baseURL = "http://localhost:3000/notes/";
            this.book.title = this.book.title.toUpperCase()
            console.warn(this.check_title())

            if(this.check_title() != false){
                var new_note = this.book;
                 axios.post(baseURL, new_note )
                .then((response) => {
                console.log(response.data);

            })
            } else {
                console.warn('failed to add new book, error: same title. ')
            }
            
            
    },
        alertSuccess(){
            var alert_position = document.getElementById('success')
            var message = `New Book ${this.book.title} Added Successfully!`

            var wrapper = document.createElement('div');
            wrapper.innerHTML = '<div id="success" class="alert alert-success" role="alert">' + message 
             + '</div>';
            alert_position.append(wrapper);
            
            setTimeout(()=>{
                wrapper.innerHTML = ''
                alert_position.append(wrapper)
            }, 2000)
        },

        add(){
            if(confirm('Are You Sure to Add this Book to Our Database? ')){
                this.addnote();
                this.alertSuccess();
                
                console.log('new book added!');
            } else {
                alert('Nothing has been added to our database.');
            }
        },
        
    },
    mounted() {
        const baseURL = "http://localhost:3000/notes/";
       
        axios(baseURL).then(response => {
            this.all_notes = response.data
            // this.book = Object.values(this.book).filter(item => item.title == this.title)
           console.log('The book should be printed out now !', this.all_notes);
       }).catch(error => console.log(error))
    },
    computed: {
        check_year: function(){
            var result = true;
            
            if(this.book.year < 1000 || this.book.year > 2023){
                result = false; 
            } 
            return result;
        }, 
        check_author: function(){
            var res = true; 

            if(!this.book.author && this.book.author.length < 2){
                res = false; 
            }
            return res;
        },
        isDisable: function(){
            var disable_add = true;

            if(this.check_author && this.check_year){
                disable_add = false;
            }
            return disable_add; 
        }
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