import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import WhatCanDo from "./components/WhatCanDo";
import ProjectGallery from "./components/ProjectGallery";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";
import ReactGA from 'react-ga';



function App() {
  ReactGA.initialize("G-SNSSLMFHHM");
  ReactGA.pageview(window.location.pathname + window.location.search);
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
