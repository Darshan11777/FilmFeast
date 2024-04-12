import HeroSection from "./heroSection/HeroSection"
import "./style.scss"
import React from 'react'
import Trending from "./trending/Trending"
import ContentWrapper from "../../component/contentWrapper/ContentWrapper"
import Hero from "./hero/Hero"

export default function Home() {
  return (
    <div className="home">
      {/* // <ContentWrapper> */}

      {/* <h1>Home</h1> */}
      <HeroSection/>
      <Trending/>
      {/* <Hero/> */}
      
      {/* </ContentWrapper> */}
          </div>
  )
}
