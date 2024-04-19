import React, { useState } from "react";

import "./style.scss";

import ContentWrapper from "../../../component/contentWrapper/ContentWrapper";
import VideoPopup from "../../../component/videoPopup/VideoPopup";
import Img from "../../../component/lazyLoadImage/LazyLoadImg";
import { PlayIcon } from "../playbtn/Playbtn";
import Image from "../../../component/lazyLoadImage/LazyLoadImg";
import fallbackimg from "../../../assets/no-poster.png";

const VideosSection = ({ data, loading }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const loadingSkeleton = () => {
        return (
            <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };
    // data={results:[]}
if(data?.results?.length<=0){
 return(
<div>

</div>
)}
    return (
        <div className="videosSection">
            <ContentWrapper>
                <div className="sectionHeading">Official Videos</div>
                {!loading ? (
                    <div className="videos">
                        {data?.results?.map((video) => (
                            <div
                                key={video.id}
                                className="videoItem"
                                onClick={() => {
                                    setVideoId(video.key);
                                    setShow(true);
                                }}
                            >
                                <div className="videoThumbnail">
                                    <img
                                        src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg` || fallbackimg}

                                    />
                                    <PlayIcon />
                                </div>
                                <div className="videoTitle">{video.name}</div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="videoSkeleton">
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                    </div>
                )}
            </ContentWrapper>
            <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
        </div>
    );
};

export default VideosSection;
