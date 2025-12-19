import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import  About  from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contacts'
import { createSparkles } from "./utils/sparkels.js";

const App = () => {

  useEffect(() => {
    const handleClick = (e) => {
      createSparkles(e.clientX, e.clientY);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    < >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
