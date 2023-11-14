import React from "react";
import "./work_carousel_alternate.css";
import work_data from "../../../work_details";
import Carousel from "react-bootstrap/Carousel";
import { useEffect } from "react";
import { useState } from "react";

const Work_Carousel_Alternate = () => {
  const [workDetailsImages, setWorkDetailsImages] = useState();
  const [workDetailsNames, setWorkDetailsNames] = useState();
  const [workDetailsImage, setWorkDetailsImage] = useState();
  const [workDetailsName, setWorkDetailsName] = useState();

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
  }, []);

  return (
    <Carousel
      id="workImageCarouselAlternate-container"
      controls={false}
      indicators={false}
      touch={false}
      pause={false}
      slide={false}
    >
      {workDetailsName?.map((workName, index) => {
        return (
          <Carousel.Item
            interval={1970}
            className="work_carousel_alternate_item_container"
            key={workDetailsImage[index]}
          >
            <img
              src={require(`../../../images/work${workDetailsImage[index]}`)}
              className="d-block w-100 h-100 work_carousel_alternate_item_container-img"
              alt="..."
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Work_Carousel_Alternate;
