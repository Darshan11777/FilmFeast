import React from 'react'
import "./style.scss"
import Image from '../../../component/lazyLoadImage/LazyLoadImg'
import img from "../../../assets/test kung img.jpg"
export default function Hero() {
   
const con=React.useRef()
let  div;

// console.log( div);
// console.log( con);
React.useEffect(() => {
 
    // const handleScroll = () => {
    //     // write code here 
    // //   setscrollY(window.scrollY);
    //   console.log( 'scrolling');
    // };
  
    // const eventListener = con.current.addEventListener("scroll", handleScroll);
  
    // // Clean up event listener on unmount
    // return () => {
    //   window.removeEventListener("scroll", eventListener);
    // };
    // div=con?.current
  }, []);
// console.log( con.current.add);
const [sr, setsr] = React.useState(0);
console.log( "state",sr);
function change(L) {
  div=con?.current
console.log( "div width",div.scrollWidth);
console.log( "scroll left",div.scrollLeft);
console.log( "widtg",div.scrollWidth);
if(sr>=(div.scrollWidth-500)){

  
  setsr(0)
  div.scrollTo({
    left: 0,
    behavior: "smooth",
  });
}else{
  
  setsr( pre =>{
const newV= L==="L"?(pre>=0 && pre-div.offsetWidth || 0):pre+div.offsetWidth
    // div.scrollLeft=newV
    div.scrollTo({
      left: newV,
      behavior: "smooth",
    });
    return newV
  })
}
    
  console.log( div);
}
    return (
<section className='slider'>

        <div className="crousal"   style={{ overflowX: 'scroll', transition: 'scrollLeft 0.5s' }} ref={con}>
         <div className="card"></div>  
         <div className="card"></div>  
         <div className="card"></div>  
         <div className="card green"></div>  
         <div className="card green"></div>  
         <div className="card green"></div>  
         <div className="card b"></div>  
         <div className="card b"></div>  
         <div className="card b"></div>  
         <div className="card"></div>  
         <div className="card"></div>  
         <div className="card">7</div>  
        </div>
<button onClick={change}>this is btton</button>
<button onClick={()=>change("L")}>{"=>"}</button>
</section>

    )
}
