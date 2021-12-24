
import React, { useEffect } from 'react'
import ReactGA from 'react-ga';
import { Route } from 'react-router-dom'
import ContactMeNew from './components/ContactMeNew';
import FooterNew from './components/FooterNew';
import HackathonSection from "./components/HackathonSection";
import HeroNew from "./components/HeroNew";
import ProjectSection from "./components/ProjectSection";
import WebsiteICreate from "./components/WebsiteICreate";
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import WhatCanDo from './components/WhatCanDo'
import ProjectGallery from './components/ProjectGallery'
import Footer from './components/Footer'
import ContactMe from './components/ContactMe'

function App() {

  useEffect(() => {
    ReactGA.initialize('G-SNSSLMFHHM');
  }, [])


  return (
    <>
      <Route path="/" exact>
        <HeroNew />
        <WebsiteICreate />
        <HackathonSection />
        <ProjectSection />
        <ContactMeNew />
        <FooterNew />
      </Route>

      <Route path="/old" exact>
        <Hero />
        <AboutMe />
        <WhatCanDo />
        <ProjectGallery />
        <ContactMe />
        <Footer />
      </Route>

      <Route path="/test" exact>
        <ContactMeNew />
        <FooterNew />
      </Route>
    </>
  );
}

export default App;
