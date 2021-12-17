import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import WhatCanDo from "./components/WhatCanDo";
import ProjectGallery from "./components/ProjectGallery";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";
import ReactGA from 'react-ga';
import { useEffect } from "react";


function App() {


  return (
    <>
      <Hero />
      <AboutMe />
      <WhatCanDo />
      <ProjectGallery />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
