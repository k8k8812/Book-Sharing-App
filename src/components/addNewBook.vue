<template>
  <div class="container">
    <form @submit.prevent='handleSubmit'>
      <div class="leftbox">
        <label> Title: </label> 
          <input type="text" v-model.trim="title" > 
          <span class="errorMsg" v-if="sametitle == true"><p>Sorry, can't add the same title. </p></span>
    
          <br>

          <label> Author: </label>
          <input type="text" v-model="author" >

         <br>
          <label> Year of Publication:</label> {{ year }}
          <input type="number" v-model ="year" required >
           <!-- <span class="errorMsg" v-if="year == null">  </span>
          <span class="errorMsg" v-else-if="checkYear"> Year should be Format: YYYY (e.g. earlier than 2023) </span>
          <span class="errorMsg" v-else>  </span> -->

         <fieldset> 
          <legend> Genre: </legend> 
          <label id="genre" >Fiction</label><input type="checkbox" value="fiction" v-model="genre" >| 
          <label id="genre" >Non-fiction</label><input type="checkbox" value="non-fiction" v-model.lazy="genre"> | 
          <label id="genre">Fantacy</label><input type="checkbox"  value="fantacy" v-model="genre"> |
          <label id="genre">Mystery</label><input type="checkbox"  value="mystery" v-model="genre"> |
          <label id="genre">Thriller</label><input type="checkbox"  value="thriller" v-model="genre"> |
          <label id="genre" >Crime</label><input type="checkbox"  value="crime" v-model="genre"> |
          <label id="genre">Documentary</label><input type="checkbox" value="documentary" v-model="genre"> <br>
          <p>{{ genre }}</p>
          </fieldset>  
          
          <!-- <br>
          <label> Upload Your Book Picture: </label>
          <input type="file" id="book-pic" name="book-pic" > -->
          <div>
            <label>Rate the book: </label>
          <select class="rating" name="rating" v-model="rating" >
            <option>  </option>
            <option value=1 id="">1</option>
            <option value=2 id="">2</option>
            <option value=3 id="">3</option>
            <option value=4 id="">4</option>
            <option value=5 id="">5</option> 
          </select>
          </div>
          <div>
            <input type="checkbox" v-model="read" >
              <label> Read </label>
          </div>

          <div class="form-group">
            <label for=""> Descripton: </label>
            <textarea class="form-control" v-model="descriptions" rows="3"></textarea>
          </div>
          <button @click="addNote(title, author, descriptions, picUrl,rating, year, read, genre)" > Add One Note </button>
          {{ newNote }}
          
      </div>



    </form>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  data(){
    return {
      title: '',
      author: '',
      year: null,
      read: false,   //check if the book is read; 
      descriptions: '',
      rating: null,
      picUrl: null,
      flag: '',
      genre: [],
      sametitle: false,  //check if the title entered has existed. 
      newNote: [],
      noteItem: ["Title: ", "Author: ", "Year of Publication: ", "Read? "],
      notes: [], //this is to store all the notes added; 
      genre: [],
      isShow: false,     // controls the right panel to show or not; 
      showAll: false,
    }
  },
  methods: {
    addNote(title,author,descriptons,picUrl,rating,year,read,genre){
        this.newNote = [title,author,descriptons,picUrl,rating,year,read,genre];

            this.notes.forEach(item => {
        if (item.includes(title)){
          this.sametitle = true;
          } 
      });

      if(this.sametitle == false && title !== " "){
        axios.post("http://localhost:3000/notes", this.newNote )
      .then((response => {
        console.log(response);
         }
    ))
    .catch(error => console.log(error) )
        
      } else if(this.sametitle == true) {
        console.log('Sorry, same title');
      }
    },
    handleSubmit(){
        console.log('form submitted.')
    },

    deleteNote(note){
      console.log(note);
      this.newNote = [];
      this.showSearch = '';
    },
  //   allNotes(){
  //     this.isShow = !this.isShow;
  //     this.showAll = true;
  //     this.showSearch = '';
  //     // console.log('yes, should pop out');
  // },
  }, 
      
}
</script>

<style scoped>

.container {
  min-width: 100%;
  min-height: 90vh;
  /* border: solid; */
  /* background-color: #3029291a; */
  display:inline-block;
  align-items: center;
  }

form {
    min-width: 20%;
    max-width: 50%;
    margin: 8vh 5vh 5vh 15vh;
    background: white;
    text-align: left;
    display:inline-flex;
    padding: 40px;
    border:solid;
    border-radius: 10px;
  }

#genre {
  margin-right:0;
  margin: left 0px;;
  font-size: 12px;
}

  .leftbox {
  min-width: 45%;
  /* border: solid; */
  padding: 15px;
  /* background-color: chocolate; */
}
  .errorMsg {
  color:rgba(139, 0, 0, 0.839);
  /* border: solid; */

}

  .rightbox-content{
  min-width: 400px;
  min-height: 70vh;
  margin-left: 10px;
  margin-top: 50px;
  border: solid 1.2px;
  padding: 15px;
  background-color:#3f39394f;
  opacity: 92%;
  color: white;
  letter-spacing: 1px;
  border-radius: 25px;
  }

  .box1 {
    padding: 5px;
    margin: 2px;
    width: max-content;
  }

  .box2 {
    margin-top: 10vh; 
    padding: 5px;
    font-size: 19px;
    /* border: solid; */
    
  }
  .box2 .deleteSearch {
    background-color: white;
    color:cadetblue;
    margin-bottom: 10px;
  }
label,legend {
    color: rgb(145, 143, 143);
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 1em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }

  input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    margin-bottom: 6px;
    color: #555;
  }
  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
  .sill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
    
  }
  input[type="searchtext"] {
    display: inline-block;
    width: 70%;
    box-sizing: content-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }

.rating {
  margin-left: 10px;
}

button {
    background: #504a4a4f;;
    border: 0;
    padding: 10px 10px;
    margin-top: 20px;
    margin-right: 10px;
    color: white;
    border-radius: 20px;
    font-size: 17px;
  }
button:hover {
  cursor: pointer;
  background-color:#3f39399d;
}

 button[disabled] {
  background-color:cornsilk;
  color: grey;
  cursor:none;
}

</style>