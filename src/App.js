import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import WhatCanDo from "./components/WhatCanDo";
import ProjectGallery from "./components/ProjectGallery";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";


function App() {


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
