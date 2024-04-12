// import React from 'react'
// import   './index.scss'

// export default function SwitchTabs({options}) {
//     const [currntTag, setCurrntTag] = React.useState("");
//     const [bg, setbg] = React.useState(0);
    

//    const selecteTag=(i)=>{
   
// setCurrntTag(i)
// setTimeout(() => {
    
//     setbg(i*100)
// }, 300);
//     }
//   return (
//     <div className='tabs'>
//         <div className="optionsList">
//       {options.map((item,index)=>{

// return(
//  <span className='item' key={index} onClick={()=>selecteTag(index)}> 
//      {item} 
//  </span>
// )
// })


//       }
// <span className='movingBg' style={{left:bg}} >
  
// </span>
//         </div>
//     </div>
//   )
// }


import React, { useState } from "react";

import "./style.scss";

const SwitchTabs = ({ data, onTabChange }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [left, setLeft] = useState(0);

    const activeTab = (tab, index) => {
        setLeft(index * 100);
        setTimeout(() => {
            setSelectedTab(index);
        }, 300);
         cv (tab, index);
    };

    return (
        <div className="switchingTabs">
            <div className="tabItems">
                {data.map((tab, index) => (
                    <span
                        key={index}
                        className={`tabItem ${
                            selectedTab === index ? "active" : ""
                        }`}
                        onClick={() => activeTab(tab, index)}
                    >
                        {tab}
                    </span>
                ))}
                <span className="movingBg" style={{ left }} />
            </div>
        </div>
        
    );
};

export default SwitchTabs;