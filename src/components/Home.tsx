import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import '../scss/welcome-page.scss';


function Home() {
  const [redirectNow, setRedirectNow] = useState(false);
  setTimeout(() => {
    setRedirectNow(true);
  }, 2000);
  return (
    <>
      {redirectNow ? <Navigate to="/dogs" /> : 
      <div className="welcome-page" />}
    </>
  )
}

export default Home