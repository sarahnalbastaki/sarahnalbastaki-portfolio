import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/MyNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Foryou from './pages/Foryou';
import Projects from './pages/Projects';
import Resume from './pages/Resume';


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
        <Route path="/sarahnalbastaki-portfolio/resume.pdf" element={<Resume />} />
      </Routes>
    </Router>
  </>
  );
};
export default App
