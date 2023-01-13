import React, { useEffect, useState } from 'react'
import DogBreed from './DogBreed'
import { motion } from "framer-motion";

function Breeds() {

  
   
  return (
    <motion.div initial={{width: 0 }} animate={{width: "100%"}} exit={{x: window.innerWidth, transition: {duration: 0.5}}} >
      <main>
        <div className="main-content">
          <div className="breeds-container">
            <div className="breeds-inner-container">
              <DogBreed />
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  )
}

export default Breeds