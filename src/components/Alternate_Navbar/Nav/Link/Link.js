import "./link.css"
import { motion } from 'framer-motion';
import { slide, scale } from '../../anim';
import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({data, isActive, setSelectedIndicator}) => {
      
    const { title, href, index} = data;

  return (
    <motion.div className="link" onMouseEnter={() => {setSelectedIndicator(href)}} custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
    <motion.div variants={scale} animate={isActive ? "open" : "closed"} className="indicator"></motion.div>
    {title === "UNBORING"?<a href={href} target="_blank"><img className="unboring_nav_image" src={require("../../../../images/navbar/unmboring tm@3x.png")} alt="" /></a> : <a href={href} className={`segment-text`} style={{}}>{title}</a>}
    
  </motion.div>
  )
}

export default Link;