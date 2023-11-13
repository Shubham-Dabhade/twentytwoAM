import React from 'react';
import "./team.css";
import TeamCard from './TeamCard/TeamCard';
import team_data from '../../team_details';
import { motion, useInView, useIsPresent } from "framer-motion";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Team = () => {

      // variants
  //-----left container-----
  const team = {
    show: {
      transition: {
        delayChildren: 0.1,
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
    <>
        <div id='Team'>
            <motion.div className='team-container' variants={team} initial='hidden' whileInView='show'>
                <motion.div className='team-top-container' variants={teamAnimationSlideRight}>OUR CORE TEAM</motion.div>
                <motion.div className='team-bottom-container' variants={teamCard} initial='hidden' whileInView='show'>
                    {team_data?.map((data,index)=>{
                        return(
                            <TeamCard name={data.name} photo={data.photo} designation={data.designation} background = {data.background} linkedIn={data.linkedin} email={data.email} key={index}/>
                        )
                    })}
                </motion.div>
            </motion.div>
        </div>
    </>
  )
}

export default Team;