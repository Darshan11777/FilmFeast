
import React,{useEffect} from 'react'
import ContentWrapper from '../../../component/contentWrapper/ContentWrapper'
import {  useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from'react-redux'
import useFetch from '../../../hooks/useFetch'
import Image from"../../../component/lazyLoadImage/LazyLoadImg"
import"./style.scss"
import panda from"../../../assets/test kung img.jpg"
export default function HeroSection() {
const navigate= useNavigate()
    const [bg, setbg] = React.useState(null);
    const [query, setQuery] = React.useState("");
    
    // const [loading, setloading] = React.useState("");
    
const {data,loading}=useFetch(`/movie/upcoming`)
useEffect(() => {

let randomNumber = Math.floor(Math.random() * ( 20 + 1));
const imgSrc= data?.results?.[randomNumber]?.backdrop_path
setbg(imgSrc ? `${baseImgUrl}${imgSrc}` :false)
//   return () => {
    //     second
    //   }
}, [data])


const searchQueryHandler=(e)=>{
    e.preventDefault()

if(e?.nativeEvent?.submitter?.name==="submit"){

    navigate(`/search/${query}`)
}
if(e.key=== "Enter" && query.length>1){
    navigate(`/search/${query}`)
}
}
// const searchQueryHandler=(e)=>{
// console.log(e.key=== "Enter");
// if(e.key=== "Enter" && query.length>1){
//     useNavigate(`/search/${query}`)
// }
// }

let baseImgUrl=useSelector(state=>state.pages.url.backdrop)
// console.log( baseImgUrl);
// https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg
  return (
    
       <div className="heroBanner">
        
            {!loading && (
                 <section className="section">
                    <div className="hero-img-container">

                 {/* <Image src={img} sizes="100vw"  alt="" className="image"/> */}
                 
                 <img src={bg || panda} loading="lazy" sizes="100vw" 
                 // srcSet="images/test-kung-img-p-500.jpg 500w, images/test-kung-img-p-800.jpg 800w, images/test-kung-img-p-1080.jpg 1080w, images/test-kung-img-p-1600.jpg 1600w, images/test-kung-img-p-2000.jpg 2000w, images/test-kung-img-p-2600.jpg 2600w, images/test-kung-img-p-3200.jpg 3200w, images/test-kung-img.jpg 3840w" 
                 alt="" className="image" />
                 <div className="w-layout-blockcontainer blur-slide w-container">
                 <div className="blur-slide1 "></div>
                 <div className="blur-slide2 "></div>
                 <div className="blur-slide3 "></div>

                 </div>
                 </div>
                 <div className="w-layout-blockcontainer container-4 w-container">
                     <h1 className="heading">FILM FEAST</h1>
                     <div className="text-block">
                        <strong className="bold-text">
                            Millions of movies, TV shows and people to discover. Explore now.
                            </strong>block.
                        </div>
                     <div className="w-form">
                         <form id="email-form"  onSubmit={searchQueryHandler} name="email-form"
                        //   data-name="Email Form"
                        //   method="get" 
                          className="form"
                        //    data-wf-page-id="66164794f0f0aa4c1ec5e759" 
                        //    data-wf-element-id="6b9b6183-d4e8-d005-4e4b-6709c3b2b2e9"
                           >
                             <input className="text-field w-input"
                              maxLength="256" 
                              name="search"
                            //    data-name="search" 
                               placeholder="Search for a movie or tv show...." 
                               type="text" 
                               id="search"
                               onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}                           
                             value={query}
                               />
                             <input type="submit"
                            //   data-wait="Please wait..."
                               className="submit-button w-button" 
                               value="Submit"
                               name="submit"
                               
                               />
     
                         </form>
                         {/* <div className="w-form-done">
                             <div>Thank you! Your submission has been received!</div>
                         </div>
                         <div className="w-form-fail">
                             <div>Oops! Something went wrong while submitting the form.</div>
                         </div> */}
                     </div>
                 </div>
             </section>)}
        </div>
    
  )
}
