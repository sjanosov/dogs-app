import Home from '../components/Home';
import Dogs from '../components/Dogs/Dogs';
import Breeds from '../components/Breeds/Breeds';
import Adoption from '../components/Adoption/Adoption';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Layout from './Layout';
import ErrorPage from './ErrorPage';

function AnimatedRoutes() {
    const location = useLocation();



    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route element={<Layout />}>
                    <Route path="" element={<Home />} />
                    <Route path="/dogs" element={<Dogs />} />
                    <Route path="/breeds" element={<Breeds />} />
                    <Route path="/adoption" element={<Adoption />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes