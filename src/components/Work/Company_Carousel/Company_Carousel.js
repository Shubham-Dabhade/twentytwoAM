import React, { useEffect, useState } from 'react';
import "./company_carousel.css";
import work_data from "../../../work_details";

const Company_Carousel = () => {

  const [logoDetailsImage, setLogoDetailsImage] = useState();
  const [logoDetailsName, setLogoDetailsName] = useState();
  const [amount,setAmount] = useState();

  useEffect(() => {

    const logoDetailsImage = [];
    const logoDetailsName = [];
    const amountDetail = [];

    work_data?.forEach((data) => {
      const logo = data.logoName;
      const logoImage = data.logoImage;
      const amount = data.amount;
      logoDetailsName.push(logo);
      logoDetailsImage.push(logoImage);
      amountDetail.push(amount);
    });

    setLogoDetailsImage([...logoDetailsImage]);
    setLogoDetailsName([...logoDetailsName]);
    setAmount([...amountDetail]);

  }, []);



  return (
    <div
      id="logoCarousel"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
      data-bs-touch="false"
      data-bs-pause="true"
      // style={{ flex: 2, height: "100%" }}
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
            src={require("../../../images/solutions/sec02-block-07@3x.png")}
            className="d-block w-100 h-100"
            alt="..."
          />
          <div className="carousel-caption d-block d-md-block" style={{color:'white'}}>
            <h5>First Active slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        {logoDetailsName?.map((logoName, index) => {
          return (
            <div
              className="carousel-item"
              data-bs-interval={amount[index]*2000}
              style={{ height: "100%", borderRadius: "30px" }}
              key={logoName}
            >
              <img
                src={require("../../../images/solutions/sec02-block-07@3x.png")}
                className="d-block w-100 h-100"
                alt="..."
              />
              <div className="carousel-caption d-block d-md-block" style={{color:'white'}}>
                <h5>{logoName}</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Company_Carousel;