import Header from "./components/Header";
import Hero from "./components/Hero";
import tw from "tailwind-styled-components"
import AboutMe from "./components/AboutMe";
import WhatCanDo from "./components/WhatCanDo";
import ProjectGallery from "./components/ProjectGallery";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";


function App() {
  return (
    <>
      <Header />
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
