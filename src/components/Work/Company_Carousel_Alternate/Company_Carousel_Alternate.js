import React, { useEffect, useState } from 'react';
import "./company_carousel_alternate.css";
import work_data from "../../../work_details";
import Carousel from "react-bootstrap/Carousel";

const Company_Carousel_Alternate = () => {

    const [logoDetailsImage, setLogoDetailsImage] = useState();
    const [logoDetailsName, setLogoDetailsName] = useState();
    const [workDetailsName, setWorkDetailsName] = useState();
    const [workDetailsImage, setWorkDetailsImage] = useState();
    const [amount, setAmount] = useState();
  
    useEffect(() => {
      const logoDetailsImage = [];
      const logoDetailsName = [];
      const amountDetail = [];
      const workDetailsNames = [];
      const workDetailsName = [];
      const workDetailsImages = [];
      const workDetailsImage = [];
  
      work_data?.forEach((data) => {
        const logo = data.logoName;
        const logoImage = data.logoImage;
        const work = data.workImage;
        const wor = data.workName;
        workDetailsImages.push(work);
        workDetailsNames.push(wor);
        const amount = data.amount;
        logoDetailsName.push(logo);
        logoDetailsImage.push(logoImage);
        amountDetail.push(amount);
      });
  
      workDetailsNames?.forEach((workDetail, index) => {
        workDetail?.forEach((detail, i) => {
          workDetailsName.push(detail);
        });
      });
      workDetailsImages?.forEach((workDetail, index) => {
        workDetail?.forEach((detail, i) => {
          workDetailsImage.push(detail);
        });
      });
  
      setWorkDetailsImage([...workDetailsImage]);
  
      setLogoDetailsImage([...logoDetailsImage]);
      setLogoDetailsName([...logoDetailsName]);
      setAmount([...amountDetail]);
      setWorkDetailsName([...workDetailsName]);
    }, []);


  return (
    <div className="Company_Carousel_Alternate_Container">
        <Carousel
        id="logoNameCarouselAlternate-container"
        controls={false}
        indicators={false}
        touch={false}
        pause={false}
        slide={false}
      >
        {logoDetailsName?.map((logoName, index) => {
          return (
            <Carousel.Item
              interval={amount[index]>1?amount[index] * 2000: amount[index]*2000}
              className='logoNameCarouselAlternate-item-container'
              key={logoName}
            >
            <img src={require("../../../images/solutions/sec02-block-07@3x.png")} className='logoNameCarouselAlternate-item-img-container'  alt="..." />
              <Carousel.Caption
                className='logoNameCarouselAlternate-caption-container'
                // className="carousel-caption-work-name"
              >
                <h5>{logoName}</h5>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <Carousel
        id="workNameCarouselAlternate-container"
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
              className='workNameCarouselAlternate-item-container'
              key={workDetailsImage[index]}
            >

              <Carousel.Caption
                className='workNameCarouselAlternate-caption-container'
              >
                <h5>{workName}</h5>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  )
}

export default Company_Carousel_Alternate;