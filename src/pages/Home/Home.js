import React from 'react';
import "./home.css"
import Navbar from '../../components/Navbar/Navbar';
import AboutUs from '../../components/AboutUs/AboutUs';
import ServiceArea from '../../components/ServiceArea/ServiceArea';
import SolutionTrack from '../../components/SolutionTrack/SolutionTrack';
import Intro from '../../components/Intro/Intro';
import Work from '../../components/Work/Work';


const Home = () => {
  return (
    <div className='Home'>
        {/* <Intro/> */}
        <AboutUs/>
        <ServiceArea/>
        <SolutionTrack/> 
        <Work/>       
    </div>
  )
}

export default Home;
