import Carousel from "../../../component/carousel/Carousel";
import ContentWrapper from "../../../component/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../component/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import "./style.scss";
import React from "react";

export default function Trending() {
const [endPoint, setendPoint] = React.useState("day");

const {data,loading}=useFetch(`/trending/movie/${endPoint}`)


  const onTabChange = (name, i) => {

    setendPoint(name)
  };
 
//  let{data} =useFetch("/trending/movie/day")
  return (
    <div className="trending">
      <ContentWrapper>
        <div className="title">
          <div className="titleName">Trending</div>

          <SwitchTabs data={["day", "week"]} onTabChange={onTabChange} />
        </div>
      </ContentWrapper>

      <Carousel data={data?.results} loading={loading} endpoint={`/trending/movie/${endPoint}`}/>
      <ContentWrapper>
      </ContentWrapper>
    </div>
  );
}
