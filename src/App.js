
import React, { useEffect } from 'react'
import ReactGA from 'react-ga';
import { Route, Switch } from 'react-router-dom'
import ContactMeNew from './components/ContactMeNew';
import FooterNew from './components/FooterNew';
import HackathonSection from "./components/HackathonSection";
import HeroNew from "./components/HeroNew";
import ProjectSection from "./components/ProjectSection";
import WebsiteICreate from "./components/WebsiteICreate";

function App() {

  useEffect(() => {
    {/*ReactGA.initialize('G-SNSSLMFHHM');*/ }
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

      <Route path="/test" exact>
        <ContactMeNew />
        <FooterNew />
      </Route>
    </>
  );
}

export default App;
