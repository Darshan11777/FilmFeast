import React from 'react'
import "./style.scss"
export default function ContentWrapper({children}) {
  return (
    <div className='container'>
      {children}
    </div>
  )
}
