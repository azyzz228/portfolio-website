import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import WhatCanDo from "./components/WhatCanDo";
import ProjectGallery from "./components/ProjectGallery";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";
import React, { useEffect } from 'react'
import ReactGA from 'react-ga';

function App() {

  useEffect(() => {
    ReactGA.initialize('G-SNSSLMFHHM');
  }, [])


  return (

    <div className="font-plex">
      <Hero />
      <AboutMe />
      <WhatCanDo />
      <ProjectGallery />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
