import React from "react";
import "./teamcard.css";
import apoorv from "../../../images/team/apoorv.jpeg";
import maulik from "../../../images/team/maulik.jpeg";
import mangesh from "../../../images/team/mangesh.jpeg";
import { useState } from "react";
import { useEffect } from "react";
import { motion, useInView, useIsPresent } from "framer-motion";

const TeamCard = (props) => {
  const [coverImage, setCoverImage] = useState();


  useEffect(()=>{
      switch (props.photo) {
        case "apoorv":
          setCoverImage(apoorv);
          break;
        case "maulik":
          setCoverImage(maulik);
          break;
        case "mangesh":
          setCoverImage(mangesh);
          break;
        default:
          break;
      }

  },[props.photo])



        // variants
  //-----left container-----
  const team = {
    show: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const teamCard = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardTeamComponent = {
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };


    // components animation
    const teamAnimationSlideRight = {
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
    
      const teamAnimationSlideUp = {
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
    
      const teamAnimationSlideLeft = {
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
    <motion.div className="TeamCard" variants={teamAnimationSlideUp} >
      <div
        id="teamCurve"
        className="card"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(2,0,36,0.6727065826330532) 0%, rgba(255,255,255,0) 100%),url(${coverImage})`,
          backgroundRepeat: "no-repeat",
          objectFit:'fill',
        }}
      >
        <div className="footer">
          <div className="connections">
            <a
              href={props.email}
              style={{ zIndex: 1020, position: "relative" }}
              target="_blank"
            >
              <div className="connection email">
                <div className="icon"></div>
              </div>
            </a>
            <a
              href={props.linkedIn}
              style={{ zIndex: 1020, position: "relative" }}
              target="_blank"
            >
              <div className="connection linkedin">
                <div className="icon"></div>
              </div>
            </a>
          </div>
          <svg id="curve">
            <path
              id="p"
              d="M0,200 Q80,100 400,200 V150 H0 V50"
              transform="translate(0 300)"
            />
            <rect
              id="dummyRect"
              x="0"
              y="0"
              height="450"
              width="400"
              fill="transparent"
            />
            {/* <!-- slide up--> */}
            <animate
              xlinkHref="#p"
              attributeName="d"
              to="M0,50 Q80,100 400,50 V150 H0 V50"
              fill="freeze"
              begin="dummyRect.mouseover"
              end="dummyRect.mouseout"
              dur="0.1s"
              id="bounce1"
            />
            {/* <!-- slide up and curve in --> */}
            <animate
              xlinkHref="#p"
              attributeName="d"
              to="M0,50 Q80,0 400,50 V150 H0 V50"
              fill="freeze"
              begin="bounce1.end"
              end="dummyRect.mouseout"
              dur="0.15s"
              id="bounce2"
            />

            <animate
              xlinkHref="#p"
              attributeName="d"
              to="M0,200 Q80,100 400,200 V150 H0 V50"
              fill="freeze"
              begin="dummyRect.mouseout"
              dur="0.15s"
              id="bounceOut"
            />
          </svg>
          <div className="info">
            <div className="team-background">{props.background}</div>
          </div>
        </div>
        <motion.div className="team-info" variants={cardTeamComponent} initial='hidden' whileInView='show'>
          <motion.div className="team-member-name" variants={teamAnimationSlideLeft}>{props.name}</motion.div>
          <motion.div className="team-member-designation" variants={teamAnimationSlideLeft}>{props.designation}</motion.div>
        </motion.div>
        <div className="card-blur"></div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
