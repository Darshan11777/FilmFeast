import { useState,useEffect } from 'react'

import './App.scss'
import {fetchDataFromApi}from "./utils/Api"

import { useDispatch, useSelector } from 'react-redux'
import { setUrl, getGenres} from './Redux/slices/Slice'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Header from './component/header/Header'

import Detailes from './pages/detailes/Details'



 
function App() {
  

  const dispatch=useDispatch()
//   const pages=useSelector(state=>state.pages)

// console.log( pages);
  

  const { url } = useSelector((state) => state.pages);
  console.log(url);

  useEffect(() => {
      fetchApiConfig();
      genresCall();
  }, []);

  const fetchApiConfig = () => {
      fetchDataFromApi("/configuration").then((res) => {
          console.log(res.images);
          console.table(res);

          const url = {
              backdrop: res.images.secure_base_url + "original",
              poster: res.images.secure_base_url + "original",
              profile: res.images.secure_base_url + "original",
          };

          dispatch(setUrl(url));
      });
  };
  

  
  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
        promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    console.log(data);
    data.map(({ genres }) => {
        return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
};
  
  

  return (


    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/:mediaType/:id" element={<Details />} /> */}
      <Route path="/:mediaType/:id" element={<Detailes />} />
      {/* <Route path="/:diaType/:id" element={<HeroSection />} /> */}
      
                {/* <Route path="/search/:query" element={<SearchResult />} />
                <Route path="/explore/:mediaType" element={<Explore />} />
                <Route path="*" element={<PageNotFound />} />
      */}
    </Routes> 
  </BrowserRouter>
  )
}

export default App
