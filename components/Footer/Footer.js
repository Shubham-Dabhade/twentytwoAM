import React from "react";
import "./footer.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="inside-footer-container">
        <div className="top-footer-container">
          {/* name - logo container */}
          <div className="ttam-name-description-container">
            <div className="ttam-name-footer">
              <a href="/">
                <div className="ttam-logo-container">
                  <img
                    src={require("../../images/navbar/TTam Logo colour@3x.png")}
                    className="ttam-logo"
                    alt="hhss_logo"
                  />
                </div>
              </a>
            </div>

            <div className="ttam-links-footer">
               <a href="mailto:apoorv@twentytwoam.com" style={{textDecoration:"none",color:'black'}}><div className="ttam-link-container" style={{color:"black"}}>info[at]twentytwoam.com</div></a>
              <div className="ttam-link-container">+91 9820138391</div>
            </div>
          </div>

          <div className="ttam-home-page-navigator-container">
            <div className="link-container-header">Platform</div>
            <ul className="ul-container-info-links">
              <li className="list-info-link">
                <AnchorLink href="#AboutUs" className="list-links">
                  AboutUs
                </AnchorLink>
              </li>
              <li className="list-info-link">
                <AnchorLink href="#ServiceArea" className="list-links">
                  Our Services
                </AnchorLink>
              </li>
              <li className="list-info-link">
                <AnchorLink
                  href="#solutiontrackContainer"
                  className="list-links"
                >
                  Our Solution Tracks
                </AnchorLink>
              </li>
              <li className="list-info-link">
                <AnchorLink href="#Work" className="list-links">
                  Our Work
                </AnchorLink>
              </li>
              <li className="list-info-link">
                <a href="/contactus" className="list-links">
                  Contact Us
                </a>
              </li>
              <li className="list-info-link">
                <a href="/insights" className="list-links">
                  Insights
                </a>
              </li>
            </ul>
          </div>
          <div className="ttam-home-unboring-navigator-container">
            <a href="http://unboringb2b.com/" target="_blank">
              <img
                src={require("../../images/navbar/unmboring tm@3x.png")}
                className="ttam-home-unboring-navigator-img"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="bottom-footer-container">© 2023 TwentyTwo AM</div>
      </div>
    </div>
  );
};

export default Footer;
