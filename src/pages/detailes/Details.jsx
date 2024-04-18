import React from 'react'
import DetailsBanner from './detailesBanner/DetailsBanner'
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import Cast from './cast/Cast';
import VideosSection from './videosSection/VideosSection';

export default function Details() {
  const{mediaType,id}=useParams()
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
      `/${mediaType}/${id}/credits`
  );

  return (
    <div>{loading?(
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    ):(<>
      
      <DetailsBanner  crew={credits?.crew} video={data?.results?.[0]}/>
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection  data={data} loading={loading} />
    </>
      )}
    </div>
  )
}
