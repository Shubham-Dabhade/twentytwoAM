import React, { useEffect, useState } from "react";
import "./navbar.css";
import { AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const { scrollY } = useScroll();
  const pathname = useLocation();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  //for removing the navbar
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setNavHidden(true);
    } else {
      setNavHidden(false);
      if (isActive) setIsActive(false);
    }
  });



  return (
    <>
      {/* <motion.div className="Navbar-outside-component"> */}
      <motion.div
        className="Navbar"
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={navHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <div className="navbar-inside-container">
          <div className="navbar-left-component">
            <div className="navbar-left-inner-component">
              <div className="logo-component">
                <a href="/" alt="home">
                  <img
                    src={require("../../images/navbar/TTam Logo colour@3x.png")}
                    className="twentytwoAMM-logo-navbar"
                    alt="twentytwoAM"
                  ></img>
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-element-right">
            <div
              onClick={() => {
                setIsActive(!isActive);
              }}
              className={`button ${isActive ? "button-op" : ""}`}
            >
              <div
                className={`${"burger"} ${isActive ? "burgerActive" : ""}`}
              ></div>
            </div>
          </div>
        </div>
        <AnimatePresence mode="wait">
          {isActive && !navHidden && <Nav increase={navHidden} />}
        </AnimatePresence>
      </motion.div>
      {/* </motion.div> */}
      {/* // adding overdisplayed navbar */}
      <motion.div className="Navbar-changeable">
        <div className="navbar-inside-container">
          <div className="navbar-left-component">
            <div className="navbar-left-inner-component">
              <div className="logo-component">
                <img
                  src={require("../../images/navbar/TTam Logo colour@3x.png")}
                  className="twentytwoAMM-logo-navbar"
                  alt="twentytwoAM"
                ></img>
              </div>
            </div>
          </div>
          <div className="navbar-element-right">
            <div
              onClick={() => {
                setIsActive(!isActive);
              }}
              className={`button ${isActive ? "button-op" : ""}`}
            >
              <div
                className={`${"burger"} ${isActive ? "burgerActive" : ""}`}
              ></div>
            </div>
          </div>
        </div>
        <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
      </motion.div>
    </>
  );
};

export default Navbar;
