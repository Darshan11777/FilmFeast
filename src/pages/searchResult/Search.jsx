import React, { useState, useEffect } from "react";
import "./style.scss";
import ContentWrapper from "../../component/contentWrapper/ContentWrapper";
import { useNavigate, useParams } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
// import Image from "../../component/lazyLoadImage/LazyLoadImg";
import { useSelector } from "react-redux";
// import { skItem} from '../../component/carousel/Carousel'
import PosterFallback from "../../assets/no-poster.png";

import InfiniteScroll from "react-infinite-scroll-component";import dayjs from "dayjs";
import { fetchDataFromApi } from "../../utils/Api";
import Spinner from "../../component/spinner/Spinner";
import Card from "../../component/card/Card";

export default function Search() {
  //   const [items, setItems] = useState([]);
  //   const [hasMore, setHasMore] = useState(true);
  //   const [page, setPage] = useState(1);
  //   const [loading, setLoading] = useState(false);
  //  const{movieName}= useParams()

  // //  curl --request GET \
  // //  --url 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=7becef0bd7b5777fdeba5e101b17f1a0'

  // // const {data,loading}= useFetch(`/search/movie`,{query:movieName,page:1})

  // console.log( "items",items);
  //   useEffect(() => {
  //     setLoading(true)
  //         fetchDataFromApi(`/search/multi`,{query:movieName,page:page})
  //           .then(response => response.json())
  //           .then(data => {
  //             setItems(prevItems => [...prevItems, ...data]);
  //             setHasMore(data.length > 0);
  //             setLoading(false)
  //           });

  // }, [page]);
  // const loadMore = () => {
  //   setPage(page + 1);
  // };

  // console.log( "loading",loading);
  const { url } = useSelector((state) => state.pages);

  

  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res);
        setPageNum((prev) => prev + 1);
        setLoading(false);
      }
    );
  };
console.log( "loading",loading);
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

  useEffect(() => {
    
    setPageNum(1);
    fetchInitialData();
  }, [query]);

  
  return (
    <section className="search">
       {loading && <Spinner initial={true} />}
        {!loading && (
       <ContentWrapper>
       {data?.results?.length > 0 ? (
          <div className="search-items">
          <InfiniteScroll
          className="infinte-scroll"
          dataLength={data?.results?.length || []}
          next={fetchNextPageData}
          hasMore={pageNum <= data?.total_pages}
          // loader={<Spinner />}
          // height={'386px'}
          >

              { data &&
                data?.results?.map((item, index) => {
                  if (item.media_type === "person") return;

                  const posterUrl = item.poster_path
                    ? url.poster + item.poster_path
                    : PosterFallback;

                  return (
                    <Card item={item} posterUrl={posterUrl}/>
                //     <div
                //       className="search-item"
                //       key={item.id}
                //       onClick={() =>
                //         navigate(`/${item.media_type || endpoint}/${item.id}`)
                //       }
                //     >
                //       {/* <div
                  
                //   className="carouselItem"
                //   onClick={() =>
                //     navigate(`/${item.media_type || endpoint}/${item.id}`)
                //   }
                // > */}
                //       <div className="posterBlock">
                //         {/* <img src={posterUrl} /> */}

                //         <Image src={posterUrl} />

                //         {/* <Genres
                //                             data={item.genre_ids.slice(0, 2)}
                //                         /> */}
                //       </div>
                //       <div className="textBlock">
                //         <span className="title">{item.title || item.name}</span>
                //         <span className="date">
                //           {dayjs(
                //             item.release_date || item.first_air_date
                //           ).format("MMM D, YYYY")}
                //         </span>
                //       </div>
                //       {/* </div> */}
                //       {/* <img src={item.poster_path} alt={item.title} /> */}
                //     </div>
                  );
                })}
            </InfiniteScroll>
            {pageNum <= data?.total_pages && <Spinner />}
          </div>
        ) :(
            <h3 className="warning"> 
            Sorry, Results not found!
            </h3>
          )}
        
        </ContentWrapper>
        )}
    </section>
  );
}

// const MyInfiniteScroller = () => {
//   const [items, setItems] = useState([]);
//   const [hasMore, setHasMore] = useState(true);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     fetch(`https://api.example.com/items?page=${page}`)
//       .then(response => response.json())
//       .then(data => {
//         setItems(prevItems => [...prevItems, ...data]);
//         setHasMore(data.length > 0);
//       });
//   }, [page]);

//   const loadMore = () => {
//     setPage(page + 1);
//   };

//   return (
//     <InfiniteScroller
//       pageStart={1}
//       loadMore={loadMore}
//       hasMore={hasMore}
//       loader={<div key={0}>Loading...</div>}
//     >
//       {items.map(item => (
//         <div key={item.id}>{item.name}</div>
//       ))}
//     </InfiniteScroller>
//   );
// };
