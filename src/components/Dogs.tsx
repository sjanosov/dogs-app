import { useNavigate } from 'react-router-dom'
import PanelBody from './PanelBody';
import { motion } from "framer-motion";
import Facts from './Facts';

function Dogs() {
  
  let navigate = useNavigate();
  
  return (
    //<motion.div initial={{width: 0 }} animate={{width: "100%"}} exit={{x: window.innerWidth, transition: {duration: 0.5}}} >
    <main className="main-content">
      <PanelBody title="15 Amazing Dog Facts">
        <p className="sub-title">
          Our dogs have always been our most loyal companions, so it's only natural that we want to know as much as we can about them. Keep reading for our top 15 dog facts that you won't believe!
        </p>
        <Facts />
        <button onClick={() => navigate("/breeds")}>Learn more about dogs</button>

      </PanelBody>
    </main>
    //</motion.div>
  )
}

export default Dogs