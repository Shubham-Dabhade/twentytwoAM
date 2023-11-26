import React, { useState } from "react";
import "./home.css";
import Navbar from "../../components/Navbar/Navbar";
import AboutUs from "../../components/AboutUs/AboutUs";
import ServiceArea from "../../components/ServiceArea/ServiceArea";
import SolutionTrack from "../../components/SolutionTrack/SolutionTrack";
import Intro from "../../components/Intro/Intro";
import Work from "../../components/Work/Work";
import { useEffect } from "react";
// import Lenis from "@studio-freight/lenis";
// import Team from "../../components/Team/Team";
// import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";
import AnchorLink from "react-anchor-link-smooth-scroll";
import PhoneIcon from '@mui/icons-material/Phone';

const Home = () => {
  const [inView, setInView] = useState(true);

  const changeTheContactButton = () => {
    setInView(false);
  };
  const outOfView = () => {
    setInView(true);
  };


  return (
    <>
    <Navbar/>
    <div className="Home">
    { inView &&
    <>
      <a href="/contactus" className="sticky-contactus-button-large">
        <div>CONTACT US</div>
      </a>
      <a href="/contactus" className="sticky-contactus-button-small">
        <PhoneIcon/>
      </a>
    </>
    }
    <Intro/>
      <AboutUs />
      <ServiceArea />
      <SolutionTrack />
      {/* <Team /> */}
      <Work />
      {/* <ContactUs
        changeTheContactButton={changeTheContactButton}
        outOfView={outOfView}
      /> */}
      <Footer />
    </div>
    </>
  );
};

export default Home;
