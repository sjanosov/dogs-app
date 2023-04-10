import React, { useCallback, useEffect, useState } from 'react'
import Home from './Home';
import Dogs from './Dogs';
import Breeds from './Breeds';
import Training from './Training';
import ErrorPage from './ErrorPage';
import Adoption from './Adoption';
import Layout from './Layout';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
    const location = useLocation();



    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route element={<Layout />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/dogs" element={<Dogs />} />
                    <Route path="/breeds" element={<Breeds />} />
                    <Route path="/training" element={<Training />} />
                    <Route path="/adoption" element={<Adoption />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes