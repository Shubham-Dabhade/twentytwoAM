import "./link.css"
import { motion } from 'framer-motion';
import { slide, scale } from '../../anim';
import React from 'react'

const Link = ({data, isActive, setSelectedIndicator}) => {
      
    const { title, href, index} = data;

  return (
    <motion.div className="link" onMouseEnter={() => {setSelectedIndicator(href)}} custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
    <motion.div variants={scale} animate={isActive ? "open" : "closed"} className="indicator"></motion.div>
    <a href={href} className={title === "UNBORING" && "unboring_text"} style={{textDecoration:"none", color:"white"}}>{title}</a>
  </motion.div>
  )
}

export default Link;