import React, { useRef, useState } from "react";
import "./nav.css";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { menuSlide } from "../anim";
import Link from "./Link/Link";
import Curve from "./Curve/Curve";
import Footer from "./Footer/Footer";

const navItems = [
  {
    title: "AboutUs",
    href: "#AboutUs",
  },
  {
    title: "Our Services",
    href: "#ServiceArea",
  },
  {
    title: "Work",
    href: "#Work",
  },
  {
    title: "ContactUs",
    href: "#ContactUs",
  },
  {
    title: "UNBORING",
    href: "/unboring",
  },
];

const Nav = ({increase}) => {
  const menuNavRef = useRef();
  const pathname = useLocation();

  if(increase){
    menuNavRef.current.style.display = 'none';
  }
  else{
    // menuNavRef.current.style.display = 'block';
  }

  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <>

    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="menu-nav"
      ref={menuNavRef}
    >
      <div className="menu-body">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="nav"
        >
          <div className="header">
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator === data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
    {/* changeable nav */}
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="menu-nav-changed"
      // ref={menuNavRef}
    >
      <div className="menu-body">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="nav"
        >
          <div className="header">
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator === data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
    </>
  );
};

export default Nav;