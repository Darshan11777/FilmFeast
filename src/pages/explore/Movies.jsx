import React, { useState, useEffect } from "react";

import ContentWrapper from "../../component/contentWrapper/ContentWrapper";
import { useNavigate, useParams } from "react-router-dom";

import { useSelector } from "react-redux";
// import { skItem} from '../../component/carousel/Carousel'
import PosterFallback from "../../assets/no-poster.png";

import InfiniteScroll from "react-infinite-scroll-component";import dayjs from "dayjs";
import { fetchDataFromApi } from "../../utils/Api";
import Spinner from "../../component/spinner/Spinner";
import Card from "../../component/card/Card";

export default function Movies() {
 
  const { url } = useSelector((state) => state.pages);

  

  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(`/search/movie`).then(
      (res) => {
        setData(res);
        setPageNum((prev) => prev + 1);
        setLoading(false);
      }
    );
  };
console.log( "loading",loading);
console.log( "data",data);

// fetchNextPageData funtion fetch  new page data from api and add its value to data state
// and addPageNum state count 

  const fetchNextPageData = () => {
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...res.results],
          });
        } else {
          setData(res);
        }
        setPageNum((prev) => prev + 1);
      }
    );
  };

  // every time user change query page will set new page data by fetchInitialData
  // and reset page no to 1
  
  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  }, [query]);

  
  return (
    <section className="search">
       <ContentWrapper>
       {loading && <Spinner initial={true} />}
        {!loading && (
      <div className="search-items">
          <InfiniteScroll
          className="infinte-scroll"
          dataLength={data?.results?.length || []}
          next={fetchNextPageData}
          hasMore={pageNum <= data?.total_pages}
          loader={<Spinner />}
          >

              {data &&
                data?.results?.map((item, index) => {
                  if (item.media_type === "person") return;

                  const posterUrl = item.poster_path
                    ? url.poster + item.poster_path
                    : PosterFallback;

                  return (
                    <Card item={item} posterUrl={posterUrl}/>
              
                  );
                })}
            </InfiniteScroll>
          </div>
        )}
        </ContentWrapper>
    </section>
  );
}


