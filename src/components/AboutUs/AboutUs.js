import React from "react";
import "./aboutus.css";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutUs = () => {
    // variants
  //-----left container-----
  const aboutUsAnimation = {
    show: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

    // components animation
    const aboutUsAnimationSlideLeft = {
      hidden: {
        opacity: 0,
        x: -200,
      },
      show: {
        opacity: 1,
        x: 0,
        transition: {
          ease: "easeInOut",
          duration: 0.6,
        },
      },
      exit: {
        opacity: 0,
        x: -200,
        transition: {
          ease: "easeInOut",
          duration: 0.8,
        },
      },
    };

    const aboutUsAnimationSlideUp = {
      hidden: {
        opacity: 0,
        y: 200,
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          ease: "easeInOut",
          duration: 0.6,
        },
      },
      exit: {
        opacity: 0,
        y: -200,
        transition: {
          ease: "easeInOut",
          duration: 0.8,
        },
      },
    };
  


  return (
    <div id="AboutUs">
      <div className="aboutus-inside-container">
        <motion.div className="aboutus-left-component" variants={aboutUsAnimation} initial='hidden' whileInView='show'>
          <motion.div className="aboutus-left-heading" variants={aboutUsAnimation} initial='hidden' whileInView = 'show' >
            <motion.div className="aboutus-left-heading-content" variants={aboutUsAnimationSlideLeft}>
              WE OFFER STRATEGY-LED{" "}
            </motion.div>
            <motion.div className="aboutus-left-heading-content" variants={aboutUsAnimationSlideLeft}>
              CONSULTANCY AND DESIGN{" "}
            </motion.div>
            <motion.div className="aboutus-left-heading-content" variants={aboutUsAnimationSlideLeft}>
              SOLUTIONS FOR YOUR BRAND.
            </motion.div>
            <div className="alternate-aboutus-left-component">
              WE OFFER STRATEGY-LED CONSULTANCY AND DESIGN SOLUTIONS FOR YOUR
              BRAND.
            </div>
          </motion.div>
          <motion.div className="aboutus-left-description" variants={aboutUsAnimationSlideUp}>
            We bring value through our strategy and design solutions, to bring
            consistency in your brand communication. We build brand identity
            through various platforms with our SOLUTION TRACKS to increase
            memorability of your brand.
          </motion.div>
          <motion.div className="aboutus-left-description" variants={aboutUsAnimationSlideUp}>
            What makes us your preferred partner for the process is our
            experienced team of strategists and designers with more that 25
            years of industry experience. Our experience helps us understand the
            complexity and challenges of the brand, to deliver valuable
            solutions that make an impact.
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
