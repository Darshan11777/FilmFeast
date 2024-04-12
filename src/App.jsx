import { useState,useEffect } from 'react'

import './App.scss'
import {fetchDataFromApi}from "./utils/Api"

import { useDispatch, useSelector } from 'react-redux'
import { setUrl, addGeneras} from './Redux/slices/Slice'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Header from './component/header/Header'


 
function App() {
  

  const dispatch=useDispatch()
//   const pages=useSelector(state=>state.pages)

// console.log( pages);
  

  const { url } = useSelector((state) => state.pages);
  console.log(url);

  useEffect(() => {
      fetchApiConfig();
      // genresCall();
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
  

  return (


    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
     
    </Routes> 
  </BrowserRouter>
  )
}

export default App
