import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import '../scss/_welcome-page.scss';
import Navigation from './Navigation';
import gsap from 'gsap';
import { motion } from "framer-motion";
function Home() {
  // const [redirectNow, setRedirectNow] = useState(false);
  // setTimeout(() => {
  //   setRedirectNow(true);
  // }, 2000);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
    tl.to(".slider", { y: "-100%", duration: 1.5, delay: 3.5 });
    tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
    tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
  },[])

  
  return (
    <>
      {/* {redirectNow ? <Navigate to="/dogs" /> :  */}
      <main>
        <div className="welcome-page">
          <Navigation />
        </div>
      </main>
      <div className="intro">
        <div className="intro-text">
          <h1 className="hide">
            <span className="text">Nobody can fully</span>
          </h1>
          <h1 className="hide">
            <span className="text">understand the meaning</span>
          </h1>
          <h1 className="hide">
            <span className="text">of love unless he’s owned a dog.</span>
          </h1>
        </div>
      </div>
      <div className="slider"></div>
      {/* } */}
    </>
  )
}

export default Home