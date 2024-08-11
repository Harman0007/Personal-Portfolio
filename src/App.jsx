import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Contact from './sections/Contact/Contact';

import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import AboutMe from './sections/Aboutme/AboutMe';
import Navbar from './sections/NavBar/NavBar';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar will be displayed on every page */}
        <main>
          <Routes>
            <Route path="/" element={<Hero />} /> {/* Default route */}
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
       
      </div>
    </Router>
  );
}

export default App;