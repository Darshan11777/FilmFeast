import ContentWrapper from "../contentWrapper/ContentWrapper"
import "./style.scss"
import React from 'react'

export default function Carousel({data}) {
  console.log( data);
  let carausalItem=""
  if(data){

     carausalItem= data.map((i,index)=>{
      return (<div className="card" key={index}>
  {i.title}
      </div>)
    })
  }
  return (
    <div className="carousel">
      <ContentWrapper>
        <div className="carouselItem">

{carausalItem}
        </div>

      </ContentWrapper>
    </div>
  )
}
