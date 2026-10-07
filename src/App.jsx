import { useEffect, useState } from "react";
import Intro from "./components/Intro.jsx";
import Hero from "./components/Hero.jsx";
import Invitation from "./components/Invitation.jsx";
import Countdown from "./components/Countdown.jsx";
import Story from "./components/Story.jsx";
import Details from "./components/Details.jsx";
import Entourage from "./components/Entourage.jsx";
import Gallery from "./components/Gallery.jsx";
import Rsvp from "./components/Rsvp.jsx";
import VenueMap from "./components/VenueMap.jsx";
import Footer from "./components/Footer.jsx";
import DressCode from "./components/DressCode.jsx";

export default function App() {
  const [opened, setOpened] = useState(false);

  // Keep the page from scrolling behind the envelope
  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [opened]);

  return (
    <div className="w">
      {!opened && <Intro onOpen={() => setOpened(true)} />}
      <main aria-hidden={!opened}>
        <Hero />
        {/* <Invitation /> */}
        <Story />
        <Entourage />
        <Details />
        <Countdown />
        {/* <Gallery /> */}
        {/* <Rsvp /> */}
        <DressCode />
        <VenueMap />
      </main>
      <Footer />
    </div>
  );
}
