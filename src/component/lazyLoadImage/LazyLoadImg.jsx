

import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Image({ src,className }){

  return ( <LazyLoadImage
    alt={"heroBanner"}
    effect="blur"
    src={src} 
    className={className || ""}
    />
  
)
}
