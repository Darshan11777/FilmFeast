import React, { useEffect } from "react";
import ContentWrapper from "../../../component/contentWrapper/ContentWrapper";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";
import Image from "../../../component/lazyLoadImage/LazyLoadImg";
import "./style.scss";
import panda from "../../../assets/test kung img.jpg";
export default function HeroSection() {
  const navigate = useNavigate();
  const [bg, setbg] = React.useState(null);
  const [query, setQuery] = React.useState("");

  const { data, loading } = useFetch(``,{s:"upcoming",page:1,r:"hd"});

  console.log( "data",data);
  const newData=data?.Search?.filter(movie=>movie.Poster!=="N/A");
  console.log( "data",newData);
  useEffect(() => {
    let randomNumber = Math.floor(Math.random() * (6 + 1));
    const imgSrc = newData?.[randomNumber]?.Poster;
    console.log( "imgSrc",imgSrc);

    console.log( "imgSrc22", imgSrc || imgSrc == "N/A" ? imgSrc : panda);
    setbg(imgSrc ? imgSrc : panda);
  }, [data]);

  const searchQueryHandler = (e) => {
    e.preventDefault();

    if (e?.nativeEvent?.submitter?.name === "submit") {
      navigate(`/search/${query}`);
    }
    if (e.key === "Enter" && query.length > 1) {
      navigate(`/search/${query}`);
    }
  };
// console.log( "imgsrc",imgSrc);

  return (
    <div className="heroBanner">
      {!loading && (
        <section className="section">
          <div className="hero-img-container">
            <img
              src={bg}
              loading="lazy"
              sizes="100vw"
              alt=""
              className="image"
            />
          </div>
          <div className="w-layout-blockcontainer container-4 w-container">
            <h1 className="heading">FILM FEAST</h1>
            <div className="text-block">
              <strong className="bold-text">
                Millions of movies, TV shows and people to discover. Explore
                now.
              </strong>
              block.
            </div>
            <div className="w-form">
              <form
                id="email-form"
                onSubmit={searchQueryHandler}
                name="email-form"
                className="form"
              >
                <input
                  className="text-field w-input"
                  maxLength="256"
                  name="search"
                  placeholder="Search for a movie or tv show...."
                  type="text"
                  id="search"
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyUp={searchQueryHandler}
                  value={query}
                />
                <input
                  type="submit"
                  className="submit-button w-button"
                  value="Submit"
                  name="submit"
                />
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
