import React,{useEffect} from 'react'
import ContentWrapper from '../../../component/contentWrapper/ContentWrapper'
import {  useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from'react-redux'
import useFetch from '../../../hooks/useFetch'
import Image from"../../../component/lazyLoadImage/LazyLoadImg"
import"./style.scss"
export default function HeroSection() {

    const [bg, setbg] = React.useState(null);
    const [query, setQuery] = React.useState("");
    
    // const [loading, setloading] = React.useState("");
    
const {data,loading}=useFetch(`/movie/upcoming`)
useEffect(() => {
 console.log( data);
let randomNumber = Math.floor(Math.random() * ( 20 + 1));
const imgSrc= data?.results[randomNumber]?.backdrop_path
setbg(`${baseImgUrl}${imgSrc}`)
//   return () => {
    //     second
    //   }
}, [data])
console.log( bg);

const searchQueryHandler=(e)=>{
console.log(e.key=== "Enter");
if(e.key=== "Enter" && query.length>1){
    useNavigate(`/search/${query}`)
}
}

let baseImgUrl=useSelector(state=>state.pages.url.backdrop)
// console.log( baseImgUrl);
// https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg
  return (
    
       <div className="heroBanner">
        
            {!loading && (
                // <div className="heroImgCon">
       <>            
        <Image src={bg} className="heroImg"/>
                    
                    <div className="imgBlur">

                    </div>
                    </>
                    //  </div>
                )}

                
            
            
                <div className="heroBannerContent">
                    
                    <h1 className="title">Welcome.</h1>
                    <p className="subTitle">
                        Millions of movies, TV shows and people to discover.
                        Explore now.
                    </p>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie or tv show...."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                            value={query}
                        />
                        <button>Search</button>
                    </div>
                        
                </div> 
                
        </div>
    
  )
}
