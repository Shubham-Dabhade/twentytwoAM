import React, { useEffect, useRef, useState } from "react";
import "./intro.css";
import { Controller, Scene } from "react-scrollmagic";
import Video from "../../images/intro/intro.mp4";
const Intro = () => {
  const introContainer = useRef();
  const introVideo = useRef();

  const [count, setCount] = useState(1);
  const [scrolledIntro, setScrolledIntro] = useState(1);
  //   const []

  //   useEffect(()=>{
  //     if(count < 578){
  //         setTimeout(()=>{
  //             setCount(count+1);
  //         },50)
  //     }
  //   },[count])

  // useEffect(()=>{
  //     window.addEventListener("scroll", scrollProgress);
  //     return ()=> window.removeEventListener("scroll", scrollProgress);
  // },[])

  // const scrollProgress = ()=>{
  //     const scrollpx = document.documentElement.scrollTop;
  //     const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  //     const scrollLen = Math.ceil(scrollpx/ winHeightPx * 100 / 0.7);

  //     if(scrollLen>0 && scrollLen<124){
  //         setScrolledIntro(scrollLen);
  //     }
  // }

  const videoRef = useRef();
  const buttonRef = useRef();

  const [playing,setPlaying] = useState(false);

  // useEffect(() => {
  //   // videoRef.current.play();
  //   videoRef.current.volume = 1;
  //   // videoRef.current.muted = false;



  //   if(playing){
  //     Play();
  //   }
  // }, []);

  return (
    <div className="Intro">


        <video
          ref={videoRef}
          src={Video}
          id='video'
          className="video-intro"
          autoPlay
          muted
          playsInline
          loop
          type="video/mp4"
        />
      </div>
  );
};

export default Intro;
