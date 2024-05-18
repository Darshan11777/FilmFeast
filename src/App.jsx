import { useState, useEffect } from "react";

import "./App.scss";
import { fetchDataFromApi } from "./utils/Api";

import { useDispatch, useSelector } from "react-redux";
import { setUrl, getGenres } from "./Redux/slices/Slice";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./component/header/Header";

import Detailes from "./pages/detailes/Details";
import Footer from "./component/footer/Footer";
import Search from "./pages/searchResult/Search";

import Explore from "./pages/explore copy/Explore";
import Loading from "./component/loading/Loading";
import ErrorPage from "./component/error/ErrorPage";
import useFetch from "./hooks/useFetch";

function App() {
  const dispatch = useDispatch();

  const { url } = useSelector((state) => state.pages);
const [showError, seterror] = useState(false);
const [dataObj, setdataObj] = useState({});

let {data,error,loading}=useFetch("/movie/popular")

  useEffect(() => {
    fetchApiConfig()
    genresCall();
   
  }, []);
  
  
  if(data?.message==="Network Error" && !showError){
    
    seterror(true)
    console.log("network error setting error");
  }
 


  useEffect(() => {
    const handleError = (event) => {
      if (event.error 
        // && event.error.message.includes('ERR_CONNECTION_TIMED_OUT')
      ) {
        // Handle the error here
        console.log('API request timed out:', event.target.responseURL);
      }
    };

    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);



  const fetchApiConfig = async() => {
    try{

      
    fetchDataFromApi("/configuration").then((res) => {
      const url =  {
        backdrop: res?.images.secure_base_url + "original",
        poster: res?.images.secure_base_url + "original",
        profile: res?.images.secure_base_url + "original",
      };
      

      dispatch(setUrl(url));
    });
    }catch(err){
      console.log("data not found",err)
      seterror(true)
    }
  };

// genresCall function get all generas for tv and movie and set it's id as key for generas
// and set it value to redux store
  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};


    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);

    data.map(({ genres }) => {
      return genres?.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
  };
  if(showError){
    return(
    <ErrorPage/>
)  }

  return (
    <BrowserRouter>
     
          <Header />

          <section className="main">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/:mediaType/:id" element={<Detailes />} />
              <Route path="/search/:query" element={<Search />} />
              <Route path="/explore/:mediaType" element={<Explore />} />
            </Routes>
          </section>
          <Footer />
        
      
    </BrowserRouter>
  );
}

export default App;
