import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import AboutMe from './sections/Aboutme/AboutMe';
import Navbar from './sections/NavBar/NavBar';

function App() {
  return (
    <>
    <Navbar/>
      <Hero />
     <AboutMe/>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
