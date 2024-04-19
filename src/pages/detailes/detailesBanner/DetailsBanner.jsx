import React, { useState } from "react";
import "./styles.scss";


import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import CircleRating from "../../../component/circleRating/CircleRating";
import { PlayIcon } from "../playbtn/Playbtn";
import dayjs from "dayjs";
import ContentWrapper from "../../../component/contentWrapper/ContentWrapper";
import VideoPopup from "../../../component/videoPopup/VideoPopup";

// import './';
export default function DetailsBanner({ crew, video }) {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const { mediaType, id } = useParams();

  const { data, loading } = useFetch(`/${mediaType}/${id}`);

  const { url } = useSelector((state) => state.pages);

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };
  const director = crew?.filter((f) => f.job === "Director");
  const writer = crew?.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );
  return (
    <>
      {loading ? (
        <div className="skeleton-item">
          <div className="posterBlock skeleton"></div>
          <div className="textBlock">
            <div className="title skeleton"></div>
            <div className="date skeleton"></div>
          </div>
        </div>
      ) : (
        <>
          <div className="detailes">
            <div className="bgimg">
              <img
                src={url.profile + data?.poster_path}
                loading="lazy"
                alt=""
                className="image"
              />
            </div>
            <div className="poster-container ">
              <div className="poster-items">
                <div className="poster">
                  <img
                    src={url.profile + data?.poster_path}
                    loading="lazy"
                    alt=""
                    className="movieimage"
                  />
                </div>
                <div className="poster-info">
                  <h2 className="movie-name">{data?.original_title}</h2>
                  <div className="tagsitem">
                    {data?.genres.slice(0, 3).map((item) => (
                      <div className="tag" key={item.name}>
                        {item.name}
                      </div>
                    ))}
                  </div>
                  <div className="trailerplay">
                    <CircleRating rating={data?.vote_average.toFixed(1)} />
                    <div
                      className="playbtn"
                      onClick={() => {
                        setShow(true);
                        setVideoId(video?.key);
                      }}
                    >
                      <PlayIcon />
                      <span className="text">Watch Trailer</span>
                    </div>
                  </div>
                  <h2 className="movies-subtitle">{data?.title}</h2>
                  <p className="paragraph">{data?.overview}</p>
                  <div className="div-block">
                    {data?.status && (
                      <div className="moviesdetailes flex">
                        <div className="text-block strong">Status: </div>
                        <div className="text-block grey">{data.status}</div>
                      </div>
                    )}
                    {data?.release_date && (
                      <div className="moviesdetailes flex">
                        <div className="text-block strong"> Release Date: </div>
                        <div className="text-block grey">
                          {" "}
                          {dayjs(data.release_date).format("MMM D, YYYY")}
                        </div>
                      </div>
                    )}
                    {data?.runtime && (
                      <div className="moviesdetailes flex">
                        <div className="text-block strong"> Runtime: </div>
                        <div className="text-block grey">
                          {" "}
                          {toHoursAndMinutes(data.runtime)}
                        </div>
                      </div>
                    )}
                  </div>

                  {director?.length > 0 && (
                    <div className="div-block posterdirector">
                      <div className="moviesdetailes">
                        <div className="text-block strong">Director: </div>
                        <div className="text-block grey">
                          {director?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {director.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {writer?.length > 0 && (
                    <div className="div-block">
                      <div className="moviesdetailes">
                        <div className="text-block strong"> Writer: </div>
                        <div className="text-block grey">
                          {writer?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {writer.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                
                  {data?.created_by?.length > 0 && (
                    <div className="div-block">
                      <div className="moviesdetailes">
                        <div className="text-block strong"> Creator: </div>
                        <div className="text-block grey">
                          {" "}
                          {data?.created_by?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {data?.created_by.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  <VideoPopup
                    show={show}
                    setShow={setShow}
                    videoId={videoId}
                    setVideoId={setVideoId}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
