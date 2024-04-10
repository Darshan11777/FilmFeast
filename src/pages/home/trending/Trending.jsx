import Carousel from "../../../component/carousel/Carousel";
import ContentWrapper from "../../../component/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../component/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import "./style.scss";
import React from "react";

export default function Trending() {
  const onTabChange = (name, i) => {
    console.log(name, i);
  };
  
 let{data} =useFetch("/trending/movie/day")
  return (
    <div className="trending">
      <ContentWrapper>
        <div className="title">
          <div className="titleName">Trending</div>

          <SwitchTabs data={["tv", "movies"]} onTabChange={onTabChange} />
        </div>
      </ContentWrapper>

      <ContentWrapper>
      <Carousel data={data?.results}/>
      </ContentWrapper>
    </div>
  );
}