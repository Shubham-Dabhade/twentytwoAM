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

  // console.log(workDetailsImages);

  return (
    <div
      id="workCarousel"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
      data-bs-touch="false"
      data-bs-pause="true"
      // style={{ flex: 3, height: "100%" }}
    >
      <div
        className="carousel-inner"
        style={{ height: "100%", borderRadius: "30px" }}
      >
        <div
          className="carousel-item active"
          data-bs-interval="2000"
          style={{ height: "100%", borderRadius: "30px" }}
        >
          <img
            src={require("../../../images/solutions/sec02-block-02@3x.png")}
            className="d-block w-100 h-100"
            alt="..."
          />
          <div className="carousel-caption d-block d-md-block">
            <h5>First Active slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        {workDetailsName?.map((workDetail, index) => {
          return (
            <div
              className="carousel-item"
              data-bs-interval="2000"
              style={{ height: "100%", borderRadius: "30px" }}
              key={workDetail}
            >
              <img
                src={require("../../../images/solutions/sec02-block-02@3x.png")}
                className="d-block w-100 h-100"
                alt="..."
              />
              <div className="carousel-caption d-block d-md-block">
                <h5>{workDetail}</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work_Carousel;

{
  /* <div className="Work_Carousel">*/
}
{
  /* <div className="inner-work-carosuel" ref={innerWorkContainer}>
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
      </div> */
}
{
  /*</div>*/
}
