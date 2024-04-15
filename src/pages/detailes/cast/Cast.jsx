// import React from "react";
// import { useSelector } from "react-redux";

// import "./style.scss";

// import ContentWrapper from "../../../component/contentWrapper/ContentWrapper";
// import Img from "../../../component/lazyLoadImage/LazyLoadImg";
// import avatar from "../../../assets/avatar.png";

// const Cast = ({ data, loading }) => {
//     const { url } = useSelector((state) => state.pages);

//     const skeleton = () => {
//         return (
//             <div className="skItem">
//                 <div className="circle skeleton"></div>
//                 <div className="row skeleton"></div>
//                 <div className="row2 skeleton"></div>
//             </div>
//         );
//     };
//     return (
//         <div className="gridContainer topcast w-container">
//                <h2 className="labelinfo">Top Cast</h2>

     
//                 {!loading ? (

// <>


//                     {/* <div className="listItems">
//                         {data?.map((item) => {
//                             let imgUrl = item.profile_path
//                                 ? url.profile + item.profile_path
//                                 : avatar;
//                             return (
//                                 <div key={item.id} className="listItem">
//                                     <div className="profileImg">
//                                         <Img src={imgUrl} />
//                                     </div>
//                                     <div className="name">{item.name}</div>
//                                     <div className="character">
//                                         {item.character}
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div> */}






//                <div id="cast-grid"
//                    className="w-layout-layout castitem wf-layout-layout">
//                   { data?.map((item) => {
//                    let imgUrl = item.profile_path
//                    ? url.profile + item.profile_path
//                    : avatar;
//                    return (

//                   <div  key={item.id} id="w-node-b9bc54d3-5866-f01a-9706-6c31b289cd94-63e0de4d" className="w-layout-cell cell-2"><img
//                            src={imgUrl} loading="lazy"
//                         //    sizes="(max-width: 479px) 100px, (max-width: 991px) 95vw, 940px"
//                            alt="" className="castimg"/>
//                        <h3 className="heading-4">{item.name}</h3>
//                        <div className="text-block-2">{item.character}</div>
//                    </div>
//                     ); 
//                 })}
//                     {/* <div id="w-node-b9bc54d3-5866-f01a-9706-6c31b289cd9a-63e0de4d" className="w-layout-cell cell-2"><img
//                            src="images/test-kung-img.jpg" loading="lazy"
//                         //    sizes="(max-width: 479px) 100px, (max-width: 991px) 95vw, 940px"
//                            alt="" className="castimg"/>
//                        <h3 className="heading-4">kung fo </h3>
//                        <div className="text-block-2">This is some text ins</div>
//                    </div>
//                    <div id="w-node-b9bc54d3-5866-f01a-9706-6c31b289cd9b-63e0de4d" className="w-layout-cell cell-2"><img
//                            src="images/test-kung-img.jpg" loading="lazy"
//                         //    sizes="(max-width: 479px) 100px, (max-width: 991px) 95vw, 940px"
//                            alt="" className="castimg"/>
//                        <h3 className="heading-4">kung fo </h3>
//                        <div className="text-block-2">This is some text ins</div>
//                    </div>
//                    <div id="w-node-b9bc54d3-5866-f01a-9706-6c31b289cd9c-63e0de4d" className="w-layout-cell cell-2"><img
//                            src="images/test-kung-img.jpg" loading="lazy"
//                         //    sizes="(max-width: 479px) 100px, (max-width: 991px) 95vw, 940px"
//                            alt="" className="castimg"/>
//                        <h3 className="heading-4">kung fo </h3>
//                        <div className="text-block-2">This is some text ins</div>
//                    </div>
//                    <div id="w-node-b9bc54d3-5866-f01a-9706-6c31b289cd9d-63e0de4d" className="w-layout-cell cell-2"><img
//                            src="images/test-kung-img.jpg" loading="lazy"
//                         //    sizes="(max-width: 479px) 100px, (max-width: 991px) 95vw, 940px"
//                            alt="" className="castimg"/>
//                        <h3 className="heading-4">kung fo </h3>
//                        <div className="text-block-2">This is some text ins</div>
//                    </div>
//                    <div id="w-node-b9bc54d3-5866-f01a-9706-6c31b289cd9e-63e0de4d" className="w-layout-cell cell-2"><img
//                            src="images/test-kung-img.jpg" loading="lazy"
//                         //    sizes="(max-width: 479px) 100px, (max-width: 991px) 95vw, 940px"
//                            alt="" className="castimg"/>
//                        <h3 className="heading-4">kung fo </h3>
//                        <div className="text-block-2">This is some text ins</div>
//                    </div>
//                  */}
//                </div>
//            {/* </div>  */}

//           </>
//                 ) : (
//                     <div className="castSkeleton">
//                         {skeleton()}
//                         {skeleton()}
//                         {skeleton()}
//                         {skeleton()}
//                         {skeleton()}
//                         {skeleton()}
//                     </div>
//                 )}
       
//                 </div>
//     );
// };

// export default Cast;





import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

import ContentWrapper from "../../../component/contentWrapper/ContentWrapper";
import Img from "../../../component/lazyLoadImage/LazyLoadImg";
import avatar from "../../../assets/avatar.png";

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

     
                {!loading  ? (

<>
               <div 
                   className="cast-items">
                  { data?.map((item) => {
                   let imgUrl = item.profile_path
                   ? url.profile + item.profile_path
                   : avatar;
                   if (item.name.length > 15 ){
                    return 
                   }
                   return (

                  <div  key={item.id}  className="cast-item">
                    <div className="cast-img-con">
                    <img
                           src={imgUrl} loading="lazy"
                        //    sizes="(max-width: 479px) 100px, (max-width: 991px) 95vw, 940px"
                           alt="" className="cast-img"/>
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
