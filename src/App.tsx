import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from '@components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@styles/App.css';
import Button from 'react-bootstrap/Button';
import Home from '@pages/Home';
import About from '@pages/About';
import Foryou from '@pages/Foryou';
import Projects from '@pages/Projects';


const App: React.FC = () => {
  return (
  <>
    <Router>
    <MyNavbar/>
      <Routes>
        <Route path="/sarahnalbastaki-portfolio/" element={<Home />} />
        <Route path="/sarahnalbastaki-portfolio/about" element={<About />} />
        <Route path="/sarahnalbastaki-portfolio/projects" element={<Projects />} />
        <Route path="/sarahnalbastaki-portfolio/for-you" element={<Foryou />} />
      </Routes>
    </Router>
  </>
  );
};
export default App
