import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

import ContentWrapper from "../../../component/contentWrapper/ContentWrapper";
import Img from "../../../component/lazyLoadImage/LazyLoadImg";
import avatar from "../../../assets/avatar.png";
import Image from "../../../component/lazyLoadImage/LazyLoadImg";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.pages);

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <ContentWrapper>
      <div className="cast-container">
        <h2 className="cast-header">Top Cast</h2>

        {!loading ? (
          <>
            <div className="cast-items">
              {data?.map((item) => {
                let imgUrl = item.profile_path
                  ? url.profile + item.profile_path
                  : avatar;
                if (item.name.length > 15) {
                  return;
                }
                return (
                  <div key={item.id} className="cast-item">
                    <div className="cast-img-con">
                      <Image src={imgUrl} alt="" className="cast-img" />
                    </div>
                    <h3 className="cast-name">{item.name}</h3>
                    <div className="character">{item.character}</div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </div>
    </ContentWrapper>
  );
};

export default Cast;
