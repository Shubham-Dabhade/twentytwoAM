import React, { useEffect } from "react";
import "./solutiontrack.css";
import { Controller, Scene } from "react-scrollmagic";
import { motion, useInView, useIsPresent } from "framer-motion";
import { ScrollMagic } from "scrollmagic";

const SolutionTrack = () => {
  // function splitScroll(){

  //     const controller = Controller;

  //     Scene({
  //         pushFollowers: false,
  //         duration: 500,
  //         triggerHook:0,
  //         triggerElement:".solution-track-right-container"
  //     })
  //     .setPin(".solution-track-right-container")
  //     .addIndicators()
  //     .addTo(controller);
  // }

  // useEffect(()=>{
  //     splitScroll();
  // },[]);

  // variants
  //-----left container-----
  const solution = {
    show: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const solutionCard = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const solutionCardComponent = {
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // components animation
  const solutionAnimationSlideRight = {
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

  const solutionAnimationSlideUp = {
    hidden: {
      opacity: 0,
      y: 300,
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
      y: -100,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  const solutionAnimationSlideLeft = {
    hidden: {
      opacity: 0,
      x: 200,
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

  return (
    <>
    <div id="solutiontrackContainer" style={{width:'100%',height:'100%'}}>
      <div className="SolutionTrack">
        <motion.div
          className="inside-solution-track-container"
          variants={solution}
          initial="hidden"
          whileInView="show"
        >
          <div className="solution-track-left-container">
            <div className="inside-solution-track-left-container">
              {/* card-CONTAINER1*/}
              <motion.div
                className="solutions-container"
                variants={solution}
                initial="hidden"
                whileInView="show"
              >
                <motion.div
                  className="solutions-heading"
                  variants={solutionAnimationSlideRight}
                >
                  SOCIAL MEDIA MANAGEMENT
                </motion.div>
                <motion.div
                  className="solution-card-container"
                  variants={solutionCard}
                  initial="hidden"
                  whileInView="show"
                >
                  {/* CARD1 */}
                  <motion.div
                    className="solution-card"
                    variants={solutionAnimationSlideUp}
                  >
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-01@3x.png")}
                      alt=""
                    ></img>
                    <motion.div
                      className="inner-solution-card"
                      variants={solutionCardComponent}
                    >
                      <motion.div
                        className="solution-card-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        SMART
                      </motion.div>
                      <motion.div
                        className="solution-card-sub-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        Social Media Audit & Restructuring Track
                      </motion.div>
                      <motion.div
                        className="solution-card-text"
                        variants={solutionAnimationSlideRight}
                      >
                        A ONE-TIME OFFERING TO HELP BUILD YOUR BRAND ONLINE &
                        MAINTAIN CONSISTENCY ACROSS YOUR SOCIAL MEDIA PLATFORM
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  {/* CARD2 */}
                  <motion.div
                    className="solution-card"
                    variants={solutionAnimationSlideUp}
                  >
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-02@3x.png")}
                      alt=""
                    ></img>
                    <motion.div
                      className="inner-solution-card"
                      variants={solutionCardComponent}
                    >
                      <motion.div
                        className="solution-card-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        LIFT
                      </motion.div>
                      <motion.div
                        className="solution-card-sub-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        LinkedIn Intense Facelift Track
                      </motion.div>
                      <motion.div
                        className="solution-card-text"
                        variants={solutionAnimationSlideRight}
                      >
                        ONE-TIME OFFERING TO HELP YOU REMAIN UP-TO-DATE ON
                        LINKEDIN AND HELP ACHIEVE YOUR BUSINESS OBJECTIVES
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
              {/* card-CONTAINER2 */}
              <motion.div
                className="solutions-container"
                variants={solution}
                initial="hidden"
                whileInView="show"
              >
                <motion.div
                  className="solutions-heading"
                  variants={solutionAnimationSlideRight}
                >
                  MARKETING & COMMUNICATIONS
                </motion.div>
                <motion.div
                  className="solution-card-container"
                  variants={solutionCard}
                  initial="hidden"
                  whileInView="show"
                >
                  {/* CARD3 */}
                  <motion.div
                    className="solution-card"
                    variants={solutionAnimationSlideUp}
                  >
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-03@3x.png")}
                      alt=""
                    ></img>
                    <motion.div
                      className="inner-solution-card"
                      variants={solutionCardComponent}
                    >
                      <motion.div
                        className="solution-card-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        CAT
                      </motion.div>
                      <motion.div
                        className="solution-card-sub-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        Communications Applications Track
                      </motion.div>
                      <motion.div
                        className="solution-card-text"
                        variants={solutionAnimationSlideRight}
                      >
                        AN OFFERING TO HELP YOU WITH CONTENT AND CAMPAIGN
                        PLANNING
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  {/* CARD4 */}
                  <motion.div
                    className="solution-card"
                    variants={solutionAnimationSlideUp}
                  >
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-04@3x.png")}
                      alt=""
                    ></img>
                    <motion.div
                      className="inner-solution-card"
                      variants={solutionCardComponent}
                    >
                      <motion.div
                        className="solution-card-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        MAT
                      </motion.div>
                      <motion.div
                        className="solution-card-sub-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        LinkedIn Intense Facelift Track
                      </motion.div>
                      <motion.div
                        className="solution-card-text"
                        variants={solutionAnimationSlideRight}
                      >
                        CREATION AND APPLICATION OF BRAND ASSETS IN MULTIMEDIA
                        FORMATS LIKE ANIMATIONS, GIFS, SOUND, ETC.
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
              {/* card-CONTAINER3 */}
              <motion.div
                className="solutions-container"
                variants={solution}
                initial="hidden"
                whileInView="show"
              >
                <motion.div
                  className="solutions-heading"
                  variants={solutionAnimationSlideRight}
                >
                  WEBSITE DESIGN
                </motion.div>
                <motion.div
                  className="solution-card-container"
                  variants={solutionCard}
                  initial="hidden"
                  whileInView="show"
                >
                  {/* CARD5 */}
                  <motion.div
                    className="solution-card"
                    variants={solutionAnimationSlideUp}
                  >
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-05@3x.png")}
                      alt=""
                    ></img>
                    <motion.div
                      className="inner-solution-card"
                      variants={solutionCardComponent}
                    >
                      <motion.div
                        className="solution-card-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        WANT
                      </motion.div>
                      <motion.div
                        className="solution-card-sub-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        Website Audit & Neating Track
                      </motion.div>
                      <motion.div
                        className="solution-card-text"
                        variants={solutionAnimationSlideRight}
                      >
                        A QUICK WEBSITE CLEAN-UP OFFERING USING EXISTING CONTENT
                        TO GIVE A FACELIFT TO THE CURRENT WEBSITE
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  {/* CARD6 */}
                  <motion.div
                    className="solution-card"
                    variants={solutionAnimationSlideUp}
                  >
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-06@3x.png")}
                      alt=""
                    ></img>
                    <motion.div
                      className="inner-solution-card"
                      variants={solutionCardComponent}
                    >
                      <motion.div
                        className="solution-card-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        WAR Track
                      </motion.div>
                      <motion.div
                        className="solution-card-sub-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        Website Audit & Revamp Track
                      </motion.div>
                      <motion.div
                        className="solution-card-text"
                        variants={solutionAnimationSlideRight}
                      >
                        A TOTAL WEBSITE REVAMP IN TERMS OF LAYOUT, DESIGN,
                        CONTENT, AND DEVELOPMENT.
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="solution-card-additonal-info"
                  variants={solutionAnimationSlideRight}
                >
                  Additional services we can offer: SEO, Maintenance.
                </motion.div>
              </motion.div>
              {/* card-CONTAINER4 */}
              <motion.div
                className="solutions-container"
                variants={solution}
                initial="hidden"
                whileInView="show"
              >
                <motion.div
                  className="solutions-heading"
                  variants={solutionAnimationSlideRight}
                >
                  BRAND ASSETS
                </motion.div>
                <motion.div
                  className="solution-card-container"
                  variants={solutionCard}
                  initial="hidden"
                  whileInView="show"
                >
                  {/* CARD7 */}
                  <motion.div
                    className="solution-card"
                    variants={solutionAnimationSlideUp}
                  >
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-07@3x.png")}
                      alt=""
                    ></img>
                    <motion.div
                      className="inner-solution-card"
                      variants={solutionCardComponent}
                    >
                      <motion.div
                        className="solution-card-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        DAT
                      </motion.div>
                      <motion.div
                        className="solution-card-sub-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        Digital Asset Track
                      </motion.div>
                      <motion.div
                        className="solution-card-text"
                        variants={solutionAnimationSlideRight}
                      >
                        AN OFFERING TO CREATE VARIOUS DIGITAL ASSETS LIKE BRAND/
                        CORPORATE FILMS, BANNERS FOR GOOGLE DISPLAY NETWORKS,
                        ETC.
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  {/* CARD8 */}
                  <motion.div
                    className="solution-card"
                    variants={solutionAnimationSlideUp}
                  >
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-08@3x.png")}
                      alt=""
                    ></img>
                    <motion.div
                      className="inner-solution-card"
                      variants={solutionCardComponent}
                    >
                      <motion.div
                        className="solution-card-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        PAT
                      </motion.div>
                      <motion.div
                        className="solution-card-sub-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        Print Asset Track
                      </motion.div>
                      <motion.div
                        className="solution-card-text"
                        variants={solutionAnimationSlideRight}
                      >
                        THIS TRACK HELPS YOU DEVELOP PRINT ASSETS LIKE PRINT
                        ADS, PAMPHLETS/LEAFLETS, BROCHURES, CATALOGUES, OFFICE
                        BRANDING, ETC.
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="solution-card-additonal-info"
                  variants={solutionAnimationSlideRight}
                >
                  Bigger offerings in these tracks can be: Brand visual
                  guidelines, Brand Identity guidelines, SOP catalogues, Brand
                  manuals.
                </motion.div>
              </motion.div>
              {/* card-CONTAINER5 */}
              <motion.div
                className="solutions-container"
                variants={solution}
                initial="hidden"
                whileInView="show"
              >
                <motion.div
                  className="solutions-heading"
                  variants={solutionAnimationSlideRight}
                >
                  EVENTS & ACTIVATIONS
                </motion.div>
                <motion.div
                  className="solution-card-container"
                  variants={solutionCard}
                  initial="hidden"
                  whileInView="show"
                >
                  {/* CARD9 */}
                  <motion.div
                    className="solution-card-9"
                    variants={solutionAnimationSlideUp}
                  >
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-09@3x.png")}
                      alt=""
                    ></img>
                    <motion.div
                      className="inner-solution-card"
                      variants={solutionCardComponent}
                    >
                      <motion.div
                        className="solution-card-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        EAT
                      </motion.div>
                      <motion.div
                        className="solution-card-sub-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        Events and Activations Track
                      </motion.div>
                      <motion.div
                        className="solution-card-text"
                        variants={solutionAnimationSlideRight}
                      >
                        THIS TRACK HELPS YOU WITH EVENT PLANNING, EXECUTION AND
                        PRODUCTION OF EVENT RELATED COLLATERALS.
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          <Controller>
            <Scene
              duration={800}
              triggerHook={0}
              triggerElement={".solution-track-right-container"}
              pin
              pushFollowers="true"
            >
              <motion.div
                className="solution-track-right-container"
                variants={solutionAnimationSlideLeft}
              >
                OUR SOLUTION TRACKS
              </motion.div>
            </Scene>
          </Controller>
        </motion.div>
      </div>
      <div className="SolutionTrack-alternative">
        <motion.div
          className="inside-solution-track-container"
          variants={solution}
          initial="hidden"
          whileInView="show"
        >
          <div className="solution-track-left-container">
            <div className="inside-solution-track-left-container">
              {/* card-CONTAINER1*/}
              <motion.div
                className="solutions-container"
                variants={solution}
                initial="hidden"
                whileInView="show"
              >
                <motion.div
                  className="solutions-heading"
                  variants={solutionAnimationSlideRight}
                >
                  SOCIAL MEDIA MANAGEMENT
                </motion.div>
                <motion.div
                  className="solution-card-container"
                  variants={solutionCard}
                  initial="hidden"
                  whileInView="show"
                >
                  {/* CARD1 */}
                  <motion.div
                    className="solution-card"
                    variants={solutionAnimationSlideUp}
                  >
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-01@3x.png")}
                      alt=""
                    ></img>
                    <motion.div
                      className="inner-solution-card"
                      variants={solutionCardComponent}
                    >
                      <motion.div
                        className="solution-card-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        SMART
                      </motion.div>
                      <motion.div
                        className="solution-card-sub-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        Social Media Audit & Restructuring Track
                      </motion.div>
                      <motion.div
                        className="solution-card-text"
                        variants={solutionAnimationSlideRight}
                      >
                        A ONE-TIME OFFERING TO HELP BUILD YOUR BRAND ONLINE &
                        MAINTAIN CONSISTENCY ACROSS YOUR SOCIAL MEDIA PLATFORM
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  {/* CARD2 */}
                  <motion.div
                    className="solution-card"
                    variants={solutionAnimationSlideUp}
                  >
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-02@3x.png")}
                      alt=""
                    ></img>
                    <motion.div
                      className="inner-solution-card"
                      variants={solutionCardComponent}
                    >
                      <motion.div
                        className="solution-card-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        LIFT
                      </motion.div>
                      <motion.div
                        className="solution-card-sub-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        LinkedIn Intense Facelift Track
                      </motion.div>
                      <motion.div
                        className="solution-card-text"
                        variants={solutionAnimationSlideRight}
                      >
                        ONE-TIME OFFERING TO HELP YOU REMAIN UP-TO-DATE ON
                        LINKEDIN AND HELP ACHIEVE YOUR BUSINESS OBJECTIVES
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
              {/* card-CONTAINER2 */}
              <motion.div
                className="solutions-container"
                variants={solution}
                initial="hidden"
                whileInView="show"
              >
                <motion.div
                  className="solutions-heading"
                  variants={solutionAnimationSlideRight}
                >
                  MARKETING & COMMUNICATIONS
                </motion.div>
                <motion.div
                  className="solution-card-container"
                  variants={solutionCard}
                  initial="hidden"
                  whileInView="show"
                >
                  {/* CARD3 */}
                  <motion.div
                    className="solution-card"
                    variants={solutionAnimationSlideUp}
                  >
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-03@3x.png")}
                      alt=""
                    ></img>
                    <motion.div
                      className="inner-solution-card"
                      variants={solutionCardComponent}
                    >
                      <motion.div
                        className="solution-card-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        CAT
                      </motion.div>
                      <motion.div
                        className="solution-card-sub-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        Communications Applications Track
                      </motion.div>
                      <motion.div
                        className="solution-card-text"
                        variants={solutionAnimationSlideRight}
                      >
                        AN OFFERING TO HELP YOU WITH CONTENT AND CAMPAIGN
                        PLANNING
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  {/* CARD4 */}
                  <motion.div
                    className="solution-card"
                    variants={solutionAnimationSlideUp}
                  >
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-04@3x.png")}
                      alt=""
                    ></img>
                    <motion.div
                      className="inner-solution-card"
                      variants={solutionCardComponent}
                    >
                      <motion.div
                        className="solution-card-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        MAT
                      </motion.div>
                      <motion.div
                        className="solution-card-sub-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        LinkedIn Intense Facelift Track
                      </motion.div>
                      <motion.div
                        className="solution-card-text"
                        variants={solutionAnimationSlideRight}
                      >
                        CREATION AND APPLICATION OF BRAND ASSETS IN MULTIMEDIA
                        FORMATS LIKE ANIMATIONS, GIFS, SOUND, ETC.
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
              {/* card-CONTAINER3 */}
              <motion.div
                className="solutions-container"
                variants={solution}
                initial="hidden"
                whileInView="show"
              >
                <motion.div
                  className="solutions-heading"
                  variants={solutionAnimationSlideRight}
                >
                  WEBSITE DESIGN
                </motion.div>
                <motion.div
                  className="solution-card-container"
                  variants={solutionCard}
                  initial="hidden"
                  whileInView="show"
                >
                  {/* CARD5 */}
                  <motion.div
                    className="solution-card"
                    variants={solutionAnimationSlideUp}
                  >
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-05@3x.png")}
                      alt=""
                    ></img>
                    <motion.div
                      className="inner-solution-card"
                      variants={solutionCardComponent}
                    >
                      <motion.div
                        className="solution-card-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        WANT
                      </motion.div>
                      <motion.div
                        className="solution-card-sub-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        Website Audit & Neating Track
                      </motion.div>
                      <motion.div
                        className="solution-card-text"
                        variants={solutionAnimationSlideRight}
                      >
                        A QUICK WEBSITE CLEAN-UP OFFERING USING EXISTING CONTENT
                        TO GIVE A FACELIFT TO THE CURRENT WEBSITE
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  {/* CARD6 */}
                  <motion.div
                    className="solution-card"
                    variants={solutionAnimationSlideUp}
                  >
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-06@3x.png")}
                      alt=""
                    ></img>
                    <motion.div
                      className="inner-solution-card"
                      variants={solutionCardComponent}
                    >
                      <motion.div
                        className="solution-card-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        WAR Track
                      </motion.div>
                      <motion.div
                        className="solution-card-sub-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        Website Audit & Revamp Track
                      </motion.div>
                      <motion.div
                        className="solution-card-text"
                        variants={solutionAnimationSlideRight}
                      >
                        A TOTAL WEBSITE REVAMP IN TERMS OF LAYOUT, DESIGN,
                        CONTENT, AND DEVELOPMENT.
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="solution-card-additonal-info"
                  variants={solutionAnimationSlideRight}
                >
                  Additional services we can offer: SEO, Maintenance.
                </motion.div>
              </motion.div>
              {/* card-CONTAINER4 */}
              <motion.div
                className="solutions-container"
                variants={solution}
                initial="hidden"
                whileInView="show"
              >
                <motion.div
                  className="solutions-heading"
                  variants={solutionAnimationSlideRight}
                >
                  BRAND ASSETS
                </motion.div>
                <motion.div
                  className="solution-card-container"
                  variants={solutionCard}
                  initial="hidden"
                  whileInView="show"
                >
                  {/* CARD7 */}
                  <motion.div
                    className="solution-card"
                    variants={solutionAnimationSlideUp}
                  >
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-07@3x.png")}
                      alt=""
                    ></img>
                    <motion.div
                      className="inner-solution-card"
                      variants={solutionCardComponent}
                    >
                      <motion.div
                        className="solution-card-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        DAT
                      </motion.div>
                      <motion.div
                        className="solution-card-sub-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        Digital Asset Track
                      </motion.div>
                      <motion.div
                        className="solution-card-text"
                        variants={solutionAnimationSlideRight}
                      >
                        AN OFFERING TO CREATE VARIOUS DIGITAL ASSETS LIKE BRAND/
                        CORPORATE FILMS, BANNERS FOR GOOGLE DISPLAY NETWORKS,
                        ETC.
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  {/* CARD8 */}
                  <motion.div
                    className="solution-card"
                    variants={solutionAnimationSlideUp}
                  >
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-08@3x.png")}
                      alt=""
                    ></img>
                    <motion.div
                      className="inner-solution-card"
                      variants={solutionCardComponent}
                    >
                      <motion.div
                        className="solution-card-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        PAT
                      </motion.div>
                      <motion.div
                        className="solution-card-sub-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        Print Asset Track
                      </motion.div>
                      <motion.div
                        className="solution-card-text"
                        variants={solutionAnimationSlideRight}
                      >
                        THIS TRACK HELPS YOU DEVELOP PRINT ASSETS LIKE PRINT
                        ADS, PAMPHLETS/LEAFLETS, BROCHURES, CATALOGUES, OFFICE
                        BRANDING, ETC.
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="solution-card-additonal-info"
                  variants={solutionAnimationSlideRight}
                >
                  Bigger offerings in these tracks can be: Brand visual
                  guidelines, Brand Identity guidelines, SOP catalogues, Brand
                  manuals.
                </motion.div>
              </motion.div>
              {/* card-CONTAINER5 */}
              <motion.div
                className="solutions-container"
                variants={solution}
                initial="hidden"
                whileInView="show"
              >
                <motion.div
                  className="solutions-heading"
                  variants={solutionAnimationSlideRight}
                >
                  EVENTS & ACTIVATIONS
                </motion.div>
                <motion.div
                  className="solution-card-container"
                  variants={solutionCard}
                  initial="hidden"
                  whileInView="show"
                >
                  {/* CARD9 */}
                  <motion.div
                    className="solution-card-9"
                    variants={solutionAnimationSlideUp}
                  >
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-09@3x.png")}
                      alt=""
                    ></img>
                    <motion.div
                      className="inner-solution-card"
                      variants={solutionCardComponent}
                    >
                      <motion.div
                        className="solution-card-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        EAT
                      </motion.div>
                      <motion.div
                        className="solution-card-sub-heading"
                        variants={solutionAnimationSlideRight}
                      >
                        Events and Activations Track
                      </motion.div>
                      <motion.div
                        className="solution-card-text"
                        variants={solutionAnimationSlideRight}
                      >
                        THIS TRACK HELPS YOU WITH EVENT PLANNING, EXECUTION AND
                        PRODUCTION OF EVENT RELATED COLLATERALS.
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          <motion.div className="solution-track-right-container">
            OUR SOLUTION TRACKS
          </motion.div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default SolutionTrack;
