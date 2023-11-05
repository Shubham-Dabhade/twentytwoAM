import React, { useEffect, useRef, useState } from "react";
import "./intro.css";
import { Controller, Scene } from "react-scrollmagic";

const Intro = () => {
  const introContainer = useRef();
  const introVideo = useRef();

  const [count,setCount] = useState(1);
  const [scrolledIntro,setScrolledIntro] = useState(1);
//   const []

//   useEffect(()=>{
//     if(count < 578){   
//         setTimeout(()=>{
//             setCount(count+1);
//         },50)
//     }
//   },[count])


    useEffect(()=>{
        window.addEventListener("scroll", scrollProgress);
        return ()=> window.removeEventListener("scroll", scrollProgress);
    },[])

    const scrollProgress = ()=>{
        const scrollpx = document.documentElement.scrollTop;
        const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrollLen = Math.ceil(scrollpx/ winHeightPx * 100 / 0.7);

        if(scrollLen>0 && scrollLen<124){
            setScrolledIntro(scrollLen);
        }
    }

  return (
    // <div className="Intro-Outer-Container">
        // <Controller>
        // <Scene duration={45000} triggerElement={".Intro"} triggerHook={0} pin pushFollowers="false" >
            <div className="Intro" ref={introContainer}>
                <img className="intro-image" src={require(`../../images/new-frames/frame${scrolledIntro.toString().padStart(4,"0")}1.png`)} alt="" />
            </div>
        // </Scene>
        // </Controller>
    // </div>
  );
};

export default Intro;
