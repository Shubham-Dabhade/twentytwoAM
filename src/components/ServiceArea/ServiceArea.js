import React from "react";
import "./servicearea.css";
import { motion } from "framer-motion";
import FramerMagnetic from "./framerMagnetic";
import Framer from "./framerMagnetic";

const ServiceArea = () => {
  return (
    <div className="ServiceArea">
      <div className="service-area-container">
        <div className="service-area-left-container">
          <div className="service-left-container-heading">
            OUR SERVICE AREAS
          </div>
        </div>
        <div className="service-area-right-container">
          <div className="service-area-right-card-container">
            {/* card-container-1 */}
            
            <div className="card-container">
              <img src={require("../../images/service/block-001@3x-8.png")} alt="manage" className="mask-card-container"></img>
              <div className="service-area-right-card service-alternate-card1">
                <div className="service-card-heading">ADVISORY</div>
                <div className="service-card-text">LONG-TERM ENGAGEMENTS</div>
                <div className="service-card-clip"></div>
              </div>
            </div>
            
            {/* card-container-2 */}
            
            <div className="card-container">
            <img src={require("../../images/service/block-002@3x.png")} alt="manage" className="mask-card-container"></img>
              <div className="service-area-right-card service-alternate-card2 ">
                <div className="service-card-heading">CONSULTANCY & DESIGN</div>
                <div className="service-card-text">
                  SHORT-TERM PROJECT ENGAGEMENTS
                </div>
                <div className="service-card-clip"></div>
              </div>
            </div>
            
            {/* card-container-3 */}
            
            <div className="card-container">
            <img src={require("../../images/service/block-003@3x.png")} alt="manage" className="mask-card-container"></img>
              <div className="service-area-right-card service-alternate-card3">
                <div className="service-card-heading">INTELLIGENCE</div>
                <div className="service-card-text">
                  RESEARCH,
                  <br />
                  ANALYSIS, <br />
                  INSIGHTS, <br />
                  BESPOKE STUDIES
                </div>
                <div className="service-card-clip"></div>
              </div>
            </div>
            
            {/* card-container-4 */}
            
            <div className="card-container">
            <img src={require("../../images/service/block-004@3x.png")} alt="manage" className="mask-card-container"></img>
              <div className="service-area-right-card service-alternate-card4">
                <div className="service-card-heading">CRITICAL ACTIONS</div>
                <div className="service-card-text">
                  CSR <br />
                  DEI <br />
                  CULTURE <br />
                  SUSTAINABILITY
                </div>
                <div className="service-card-clip"></div>
              </div>
            </div>
            
            {/* card-container-5 */}
            
            <div className="card-container">
            <img src={require("../../images/service/block-005@3x.png")} alt="manage" className="mask-card-container"></img>
              <div className="service-area-right-card service-alternate-card5">
                <div className="service-card-heading">MARKETING & COMMS</div>
                <div className="service-card-text">
                  CONTENT, COPY,
                  <br />
                  CAMPAIGNS,
                  <br /> AV CONCEPTS,
                  <br />
                  COLLATERALS,
                  <br />
                  DIGITAL COMMS &
                  <br />
                  SOCIAL MEDIA, ETC.
                </div>
                <div className="service-card-clip"></div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
