import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
// import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/main.css';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Education />
      <Skills />
      {/* <Experience /> */}
      <Projects />
      <Achievements/>
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;