import React from 'react';
import "./home.css"
import Navbar from '../../components/Navbar/Navbar';
import AboutUs from '../../components/AboutUs/AboutUs';
import ServiceArea from '../../components/ServiceArea/ServiceArea';

const Home = () => {
  return (
    <div className='Home'>
        <AboutUs/>
        <ServiceArea/>
    </div>
  )
}

export default Home;
