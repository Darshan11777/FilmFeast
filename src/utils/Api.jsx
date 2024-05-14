
import axios from "axios";


// const BASE_URL = "https://api.themoviedb.org/3";
const BASE_URL = "http://www.omdbapi.com/";

// api key
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const OMDB_TOKEN = import.meta.env.VITE_APP_OMDB_TOKEN;

// const headers = {
//     Authorization: "bearer " + OMDB_TOKEN,
// };
const headers = {
    "apikey":OMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {

    try {
        const {data}  = await axios.get(BASE_URL + url, {
            
            params:{...params,"apikey":OMDB_TOKEN},
        });
        console.log( "Name",{params:{...params,apikey:OMDB_TOKEN}});
        return data;
    } catch (err) {
   
        return err;
    }
};





// import axios from 'axios';

// const OMDB_API_KEY = 'YOUR_OMDB_API_KEY';
// const OMDB_API_URL = 'http://www.omdbapi.com';

// export const fetchDataFromOMDB = async (searchTerm) => {
//   try {
//     const response = await axios.get(OMDB_API_URL, {
//       params: {
//         apikey: OMDB_API_KEY,
//         s: searchTerm,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data from OMDB:', error);
//     throw error;
//   }
// };