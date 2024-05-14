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
import PageNotFound from "./pages/404/PageNotFound";
import useFetch from "./hooks/useFetch";
function App() {
  // const dispatch = useDispatch();

  // const { url } = useSelector((state) => state.pages);

  // useEffect(() => {
  //   fetchApiConfig();
  //   genresCall();
  // }, []);

  // fetchApiConfig function get base url for img and set in redux store 

  // const fetchApiConfig = () => {
  //   fetchDataFromApi("/configuration").then((res) => {
  //     const url = {
  //       backdrop: res.images.secure_base_url + "original",
  //       poster: res.images.secure_base_url + "original",
  //       profile: res.images.secure_base_url + "original",
  //     };

  //     dispatch(setUrl(url));
  //   });
  // };

// genresCall function get all generas for tv and movie and set it's id as key for generas
// and set it value to redux store
  // const genresCall = async () => {
  //   let promises = [];
  //   let endPoints = ["tv", "movie"];
  //   let allGenres = {};


  //   endPoints.forEach((url) => {
  //     promises.push(fetchDataFromApi(`/genre/${url}/list`));
  //   });

  //   const data = await Promise.all(promises);

  //   data.map(({ genres }) => {
  //     return genres?.map((item) => (allGenres[item.id] = item));
  //   });

  //   dispatch(getGenres(allGenres));
  // };
console.log( "fetchDataFromApi",fetchDataFromApi("",{type:"movie",s:"upcoming"}));
const{data}=useFetch("",{type:"movie",s:"upcoming"});
console.log( "data",data);
  return (
    <BrowserRouter>
      {/* {!url.backdrop ? ( */}
        <>
          <Header />

          <section className="main">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/:mediaType/:id" element={<Detailes />} />
              <Route path="/search/:query" element={<Search />} />
              <Route path="/explore/:mediaType" element={<Explore />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </section>
          <Footer />
        </>
       {/* ) : (
        <Loading />
      )} */}
    </BrowserRouter>
  );
}

export default App;
