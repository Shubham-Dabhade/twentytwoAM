import React, { useEffect, useRef, useState } from "react";
import "./intro.css";
import { Controller, Scene } from "react-scrollmagic";
import Video from "../../images/intro/intro.mp4";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";

const Intro = ({checkLoading}) => {


  const videoRef = useRef();

  const [ loading,setLoading] = useState(true);

  useEffect(()=>{

    checkLoading(loading);
    
  },[loading]);

  return (
    <div className="Intro">
      <video
        ref={videoRef}
        src={Video}
        id="video"
        className="video-intro"
        autoPlay
        muted
        preload={'auto'}
        playsInline
        loop
        type="video/mp4"
        onLoadedData={()=>{setLoading(false)}}
      />

      {/* <AdvancedVideo
        id="video"
        className="video-intro"
        cldVid={cld.video(Video).quality("auto")}
        cldPoster="auto"
        // autoPlay
        // muted
        // playsInline
        // loop
        // type="video/mp4"
      /> */}
    </div>
  );
};

export default Intro;
