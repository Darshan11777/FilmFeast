import HeroSection from "./heroSection/HeroSection"
import "./style.scss"
import React from 'react'
import Trending from "./trending/Trending"
import ContentWrapper from "../../component/contentWrapper/ContentWrapper"
import Hero from "./hero/Hero"
import TopRated from "./topRated/TopRated"
import Popular from "./popular/Popular"

export default function Home() {
  return (
    <div className="home">
      {/* // <ContentWrapper> */}

      {/* <h1>Home</h1> */}
      <HeroSection/>
      <Trending/>
      <Popular/>
      <TopRated/>
      {/* <Hero/> */}
      
      {/* </ContentWrapper> */}
          </div>
  )
}
