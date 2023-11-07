import React, { useEffect, useRef, useState } from "react";
import "./work_carousel.css";
import work_data from "../../../work_details";

const Work_Carousel = ({
  workIn,
  currentComp,
  amount,
  workNames,
  workImage,
}) => {
  const innerWorkContainer = useRef();
  const workCardContainer = useRef();
  const [trans, setTrans] = useState(0);

  const [workDetailsImages, setWorkDetailsImages] = useState();
  const [workDetailsNames, setWorkDetailsNames] = useState();
  const [workDetailsImage, setWorkDetailsImage] = useState();
  const [workDetailsName, setWorkDetailsName] = useState();


  // if(!window.matchMedia("(prefers-reduced-motion:reduce)").matches){

  // }

  useEffect(() => {
    const workDetailsImages = [];
    const workDetailsNames = [];
    const workDetailsImage = [];
    const workDetailsName = [];

    work_data?.forEach((data) => {
      const work = data.workImage;
      const wor = data.workName;
      workDetailsNames.push(wor);
      workDetailsImages.push(work);
    });
    workDetailsImages?.forEach((workDetail, index) => {
      workDetail?.forEach((detail, i) => {
        workDetailsImage.push(detail);
        workDetailsName.push(workDetailsNames[index][i]);
      });
    });

    setWorkDetailsImage([...workDetailsImage]);
    setWorkDetailsName([...workDetailsName]);

    const scrollerContent = Array.from(innerWorkContainer.current?.children);
  
    scrollerContent.forEach((item)=>{
      const duplicatedItem = item.cloneNode(true);
      
      duplicatedItem.setAttribute('aria-hidden',true);
      innerWorkContainer.current.appendChild(duplicatedItem);
    })


    console.log(workDetailsImage.length);
    // if (trans > workDetailsImage.length-2) {
    //   setTrans(0);
    // }
    // else{
    //   setTimeout(() => {
    //     setTrans(trans + 1);
    //   }, 1500);
    // }

  }, [trans, amount]);

  // console.log(workDetailsImages);

  return (
    <div className="Work_Carousel">
      <div className="inner-work-carosuel" ref={innerWorkContainer}>
        {workDetailsName?.map((workDetail, index) => {
          return (
            <div
              ref={workCardContainer}
              className="work-card-container"
              style={{ transform: `translateY(-${trans * 100}%)` }}
              key={index}
            >
              <div className="work-name-container">{workDetail}</div>
              <div className="work-image-container">
                {workDetailsImage[index]}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work_Carousel;
