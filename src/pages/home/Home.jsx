import HeroSection from "./heroSection/HeroSection"
import "./style.scss"
import React from 'react'
import Trending from "./trending/Trending"

import TopRated from "./topRated/TopRated"
import Popular from "./popular/Popular"

export default function Home() {
  return (
    <div className="home">
      
      <HeroSection/>
      <Trending/>
      <Popular/>
      <TopRated/>
    
          </div>
  )
}
