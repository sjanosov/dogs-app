import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Dogs from './components/Dogs';
import Breeds from './components/Breeds';
import Training from './components/Training';
import ErrorPage from './components/ErrorPage';
import Adoption from './components/Adoption';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
    {/* <nav>
      <Link to="/">Welcome</Link>
      <Link to="/dogs">Dogs</Link>
      <Link to="/breeds">Breeds</Link>
      <Link to="/training">Training</Link>
      <Link to="/adoption">Adoption</Link>
    </nav> */}
      <Routes>
          <Route index element={<Home />}/>
          <Route element={<Layout />}>
            <Route path="/dogs" element={<Dogs />} />
            <Route path="/breeds" element={<Breeds />} />
            <Route path="/training" element={<Training />} />
            <Route path="/adoption/:dogname" element={<Adoption />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
