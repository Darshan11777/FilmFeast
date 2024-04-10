import HeroSection from "./heroSection/HeroSection"
import "./style.scss"
import React from 'react'
import Trending from "./trending/Trending"
import ContentWrapper from "../../component/contentWrapper/ContentWrapper"

export default function Home() {
  return (
    <div className="home">
      {/* // <ContentWrapper> */}

      {/* <h1>Home</h1> */}
      <HeroSection/>
      <Trending/>
      
      {/* </ContentWrapper> */}
          </div>
  )
}
