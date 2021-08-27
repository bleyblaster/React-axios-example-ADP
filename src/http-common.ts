import axios from "axios";

export default axios.create({
    baseURL:"https://tutorials-47a4.restdb.io/rest",
    headers:{
         "Content-type": "application/json",
         "x-apikey": "8bfad137f1cce2394d615737b92675541c83f",
        // "Access-Control-Allow-Origin" : "*",
        // "Access-Control-Allow-Headers": "accept"
    }
});