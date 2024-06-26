
import axios from "axios";
// import { useDispatch } from "react-redux";
// import{setError} from "../Redux/slices/Slice"

const BASE_URL = "https://api.themoviedb.org/3";

// api key
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {

    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
   
        return err;
        
    }
};



