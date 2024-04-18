import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import Image from "../lazyLoadImage/LazyLoadImg";
import PosterFallback from "../../assets/no-poster.png";
export default function Card({ item, posterUrl }) {
  const navigate = useNavigate();
  return (
    <div
      className="search-item"
      key={item.id}
      onClick={() => navigate(`/${item.media_type || endpoint}/${item.id}`)}
    >
      <div className="posterBlock">
        <Image src={posterUrl || PosterFallback} />
      </div>
      <div className="textBlock">
        <span className="title">{item.title || item.name}</span>
        <span className="date">
          {dayjs(item.release_date || item.first_air_date).format(
            "MMM D, YYYY"
          )}
        </span>
      </div>
    </div>
  );
}
