import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import Navigation from './Navigation';
import gsap from 'gsap';
import { motion } from "framer-motion";
import Button from '@mui/material/Button';
import  Redirect  from 'react-router-dom';
function Home() {
  // const [redirectNow, setRedirectNow] = useState(false);
  // setTimeout(() => {
  //   setRedirectNow(true);
  // }, 2000);

  // useEffect(() => {
  //   const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

  //   tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
  //   tl.to(".slider", { y: "-100%", duration: 1.5, delay: 3.5 });
  //   tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
  //   tl.fromTo("nav", { opacity: 0, background: "black" }, { opacity: 1, background: "#AC6200" });
  // },[])

  
  return (
    <>
      {/* {redirectNow ? <Navigate to="/dogs" /> :  */}
      <main>
        <div className="welcome-page">
          {/* <Navigation /> */}
          <div className="wp-content">
            <h1>
              Nobody can fully understand the meaning of love unless he’s owned a dog.
            </h1>
            <h2>Find Your Furry Friend at Our Adoption Page</h2>
            <Button href="/adoption" variant="contained">
              ADOPT A DOG
            </Button>
          </div>
        </div>
      </main>
         
    </>
  )
}

export default Home