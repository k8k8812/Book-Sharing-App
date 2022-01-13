import Axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); 

const baseURL = "http://localhost:3000";
const notesURL = `${baseURL}/notes`


export default new Vuex.Store({
    strict: true, //In strict mode, whenever Vuex state is mutated outside of mutation handlers, an error will be thrown. 
    state: {
        
    },
    mutations: {

    },
    actions: {
        
    }
})