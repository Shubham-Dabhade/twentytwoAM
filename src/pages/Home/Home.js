import React from 'react';
import "./home.css"
import Navbar from '../../components/Navbar/Navbar';
import AboutUs from '../../components/AboutUs/AboutUs';
import ServiceArea from '../../components/ServiceArea/ServiceArea';
import SolutionTrack from '../../components/SolutionTrack/SolutionTrack';
import Intro from '../../components/Intro/Intro';


const Home = () => {
  return (
    <div className='Home'>
        <Intro/>
        <AboutUs/>
        <ServiceArea/>
        <SolutionTrack/>        
    </div>
  )
}

export default Home;
