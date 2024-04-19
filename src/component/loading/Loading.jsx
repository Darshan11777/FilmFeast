import React from 'react'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import './style.scss'

export default function Loading() {
  return (
    <div className='loading-scaleton'>
        <div className="header">
        <ContentWrapper>
          <div className="img">
            <div className="imgitem"></div>

          </div>
          <div className="text"></div>
          </ContentWrapper>

        </div>
      
    </div>
  )
}
