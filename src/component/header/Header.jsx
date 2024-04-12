import React from "react";
import "./style.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";

export default function Header() {
  const [scrollY, setscrollY] = React.useState("");
  const [navClass, setnavClass] = React.useState("");

  // React.useEffect(() => {
  //     const listner=window.addEventListener("scroll", setscrollY(window.scrollY))
  // return()=>removeEventListener(window,listner)

  // }, [
  //     scrollY
  // ])
  console.log(scrollY);
//   React.useEffect(() => {
   
//     const handleScroll= window.addEventListener("scroll", () => {
//       setscrollY(window.scrollY);
//       navClassSet();
//     });

//     // Clean up event listener on unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [scrollY]);

React.useEffect(() => {
    const handleScroll = () => {
      setscrollY(window.scrollY);
      navClassSet();
    };
  
    const eventListener = window.addEventListener("scroll", handleScroll);
  
    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", eventListener);
    };
  }, [scrollY]);
  const navClassSet = () => {
    if (scrollY > 200) {
      if (window.scrollY > scrollY) {
        setnavClass("hide");
      } else {
        setnavClass("top");
      }
    } else {
      setnavClass("show");
    }
  };
  return (
    <div>
      <section className={`header ${navClass} `}>
        <ContentWrapper>
          <div className="navbar navbardark w-nav">
            <div className="nav-container">
              <a href="#" className="brand w-nav-brand"></a>
              <nav className="nav-menu w-nav-menu">
                <a href="#" className="nav-link w-nav-link">
                  Home
                </a>
                <a href="#" className="nav-link w-nav-link">
                  About
                </a>
              </nav>
              {/* <div className="menu-button w-nav-button">
          <div className="icon-2 w-icon-nav-menu"></div>
        </div> */}
            </div>
          </div>
        </ContentWrapper>
      </section>
    </div>
  );
}
