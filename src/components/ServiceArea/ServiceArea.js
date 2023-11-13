import React from "react";
import "./servicearea.css";
import { motion, useInView, useIsPresent } from "framer-motion";
import FramerMagnetic from "./framerMagnetic";
import Framer from "./framerMagnetic";

const ServiceArea = () => {
  // variants
  //-----left container-----
  const service = {
    show: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const serviceCard = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardServiceComponent = {
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // components animation
  const serviceAnimationSlideRight = {
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

  const serviceAnimationSlideUp = {
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

  const serviceAnimationSlideLeft = {
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
    <div id="ServiceArea">
      <motion.div
        className="service-area-container"
        variants={service}
        initial="hidden"
        whileInView="show"
      >
        <motion.div
          className="service-area-left-container"
          variants={serviceAnimationSlideRight}
        >
          <motion.div className="service-left-container-heading">
            OUR SERVICE AREAS
          </motion.div>
        </motion.div>
        <div className="service-area-right-container">
          <motion.div
            className="service-area-right-card-container"
            variants={serviceCard}
            initial="hidden"
            whileInView="show"
          >
            {/* card-container-1 */}

            <motion.div
              className="card-container"
              variants={serviceAnimationSlideUp}
            >
              <img
                src={require("../../images/service/block-001@3x-8.png")}
                alt="manage"
                className="mask-card-container"
              ></img>
              <motion.div
                className="service-area-right-card service-alternate-card1"
                variants={cardServiceComponent}
                initial="hidden"
                whileInView="show"
              >
                <motion.div
                  className="service-card-heading"
                  variants={serviceAnimationSlideLeft}
                >
                  ADVISORY
                </motion.div>
                <motion.div
                  className="service-card-text"
                  variants={serviceAnimationSlideLeft}
                >
                  LONG-TERM ENGAGEMENTS
                </motion.div>
                <div className="service-card-clip"></div>
              </motion.div>
            </motion.div>

            {/* card-container-2 */}

            <motion.div
              className="card-container"
              variants={serviceAnimationSlideUp}
            >
              <img
                src={require("../../images/service/block-002@3x.png")}
                alt="manage"
                className="mask-card-container"
              ></img>
              <motion.div
                className="service-area-right-card service-alternate-card2 "
                variants={cardServiceComponent}
                initial="hidden"
                whileInView="show"
              >
                <motion.div
                  className="service-card-heading"
                  variants={serviceAnimationSlideLeft}
                >
                  CONSULTANCY & DESIGN
                </motion.div>
                <motion.div
                  className="service-card-text"
                  variants={serviceAnimationSlideLeft}
                >
                  SHORT-TERM PROJECT ENGAGEMENTS
                </motion.div>
                <div className="service-card-clip"></div>
              </motion.div>
            </motion.div>

            {/* card-container-3 */}

            <motion.div
              className="card-container"
              variants={serviceAnimationSlideUp}
            >
              <img
                src={require("../../images/service/block-003@3x.png")}
                alt="manage"
                className="mask-card-container"
              ></img>
              <motion.div
                className="service-area-right-card service-alternate-card3"
                variants={cardServiceComponent}
                initial="hidden"
                whileInView="show"
              >
                <motion.div
                  className="service-card-heading"
                  variants={serviceAnimationSlideLeft}
                >
                  INTELLIGENCE
                </motion.div>
                <motion.div
                  className="service-card-text"
                  variants={serviceAnimationSlideLeft}
                >
                  RESEARCH,
                  <br />
                  ANALYSIS, <br />
                  INSIGHTS, <br />
                  BESPOKE STUDIES
                </motion.div>
                <div className="service-card-clip"></div>
              </motion.div>
            </motion.div>

            {/* card-container-4 */}

            <motion.div
              className="card-container"
              variants={serviceAnimationSlideUp}
            >
              <img
                src={require("../../images/service/block-004@3x.png")}
                alt="manage"
                className="mask-card-container"
              ></img>
              <motion.div
                className="service-area-right-card service-alternate-card4"
                variants={cardServiceComponent}
                initial="hidden"
                whileInView="show"
              >
                <motion.div
                  className="service-card-heading"
                  variants={serviceAnimationSlideLeft}
                >
                  CRITICAL ACTIONS
                </motion.div>
                <motion.div
                  className="service-card-text"
                  variants={serviceAnimationSlideLeft}
                >
                  CSR <br />
                  DEI <br />
                  CULTURE <br />
                  SUSTAINABILITY
                </motion.div>
                <div className="service-card-clip"></div>
              </motion.div>
            </motion.div>

            {/* card-container-5 */}

            <motion.div
              className="card-container"
              variants={serviceAnimationSlideUp}
            >
              <img
                src={require("../../images/service/block-005@3x.png")}
                alt="manage"
                className="mask-card-container"
              ></img>
              <motion.div
                className="service-area-right-card service-alternate-card5"
                variants={cardServiceComponent}
                initial="hidden"
                whileInView="show"
              >
                <motion.div
                  className="service-card-heading"
                  variants={serviceAnimationSlideLeft}
                >
                  MARKETING & COMMS
                </motion.div>
                <motion.div
                  className="service-card-text"
                  variants={serviceAnimationSlideLeft}
                >
                  CONTENT, COPY,
                  <br />
                  CAMPAIGNS,
                  <br /> AV CONCEPTS,
                  <br />
                  COLLATERALS,
                  <br />
                  DIGITAL COMMS &
                  <br />
                  SOCIAL MEDIA, ETC.
                </motion.div>
                <div className="service-card-clip"></div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceArea;
