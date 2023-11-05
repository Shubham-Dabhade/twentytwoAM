import React, { useEffect } from "react";
import "./solutiontrack.css";
import { Controller, Scene } from "react-scrollmagic";
import { ScrollMagic } from "scrollmagic";

const SolutionTrack = () => {
  // function splitScroll(){

  //     const controller = Controller;

  //     Scene({
  //         pushFollowers: false,
  //         duration: 500,
  //         triggerHook:0,
  //         triggerElement:".solution-track-right-container"
  //     })
  //     .setPin(".solution-track-right-container")
  //     .addIndicators()
  //     .addTo(controller);
  // }

  // useEffect(()=>{
  //     splitScroll();
  // },[]);

  return (
    <>
      <div className="SolutionTrack">
        <div className="inside-solution-track-container">
          <div className="solution-track-left-container">
            <div className="inside-solution-track-left-container">
              {/* card-CONTAINER1*/}
              <div className="solutions-container">
                <div className="solutions-heading">SOCIAL MEDIA MANAGEMENT</div>
                <div className="solution-card-container">
                  {/* CARD1 */}
                  <div className="solution-card">
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-01@3x.png")}
                      alt=""
                    ></img>
                    <div className="inner-solution-card">
                      <div className="solution-card-heading">SMART</div>
                      <div className="solution-card-sub-heading">
                        Social Media Audit & Restructuring Track
                      </div>
                      <div className="solution-card-text">
                        A ONE-TIME OFFERING TO HELP BUILD YOUR BRAND ONLINE &
                        MAINTAIN CONSISTENCY ACROSS YOUR SOCIAL MEDIA PLATFORM
                      </div>
                    </div>
                  </div>
                  {/* CARD2 */}
                  <div className="solution-card">
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-02@3x.png")}
                      alt=""
                    ></img>
                    <div className="inner-solution-card">
                      <div className="solution-card-heading">LIFT</div>
                      <div className="solution-card-sub-heading">
                        LinkedIn Intense Facelift Track
                      </div>
                      <div className="solution-card-text">
                        ONE-TIME OFFERING TO HELP YOU REMAIN UP-TO-DATE ON
                        LINKEDIN AND HELP ACHIEVE YOUR BUSINESS OBJECTIVES
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* card-CONTAINER2 */}
              <div className="solutions-container">
                <div className="solutions-heading">
                  MARKETING & COMMUNICATIONS
                </div>
                <div className="solution-card-container">
                  {/* CARD3 */}
                  <div className="solution-card">
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-03@3x.png")}
                      alt=""
                    ></img>
                    <div className="inner-solution-card">
                      <div className="solution-card-heading">CAT</div>
                      <div className="solution-card-sub-heading">
                        Communications Applications Track
                      </div>
                      <div className="solution-card-text">
                        AN OFFERING TO HELP YOU WITH CONTENT AND CAMPAIGN
                        PLANNING
                      </div>
                    </div>
                  </div>
                  {/* CARD4 */}
                  <div className="solution-card">
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-04@3x.png")}
                      alt=""
                    ></img>
                    <div className="inner-solution-card">
                      <div className="solution-card-heading">MAT</div>
                      <div className="solution-card-sub-heading">
                        LinkedIn Intense Facelift Track
                      </div>
                      <div className="solution-card-text">
                        CREATION AND APPLICATION OF BRAND ASSETS IN MULTIMEDIA
                        FORMATS LIKE ANIMATIONS, GIFS, SOUND, ETC.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* card-CONTAINER3 */}
              <div className="solutions-container">
                <div className="solutions-heading">WEBSITE DESIGN</div>
                <div className="solution-card-container">
                  {/* CARD5 */}
                  <div className="solution-card">
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-05@3x.png")}
                      alt=""
                    ></img>
                    <div className="inner-solution-card">
                      <div className="solution-card-heading">WANT</div>
                      <div className="solution-card-sub-heading">
                        Website Audit & Neating Track
                      </div>
                      <div className="solution-card-text">
                        A QUICK WEBSITE CLEAN-UP OFFERING USING EXISTING CONTENT
                        TO GIVE A FACELIFT TO THE CURRENT WEBSITE
                      </div>
                    </div>
                  </div>
                  {/* CARD6 */}
                  <div className="solution-card">
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-06@3x.png")}
                      alt=""
                    ></img>
                    <div className="inner-solution-card">
                      <div className="solution-card-heading">WARTrack</div>
                      <div className="solution-card-sub-heading">
                        Website Audit & Revamp Track
                      </div>
                      <div className="solution-card-text">
                        A TOTAL WEBSITE REVAMP IN TERMS OF LAYOUT, DESIGN,
                        CONTENT, AND DEVELOPMENT.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="solution-card-additonal-info">
                  Additional services we can offer: SEO, Maintenance.
                </div>
              </div>
              {/* card-CONTAINER4 */}
              <div className="solutions-container">
                <div className="solutions-heading">BRAND ASSETS</div>
                <div className="solution-card-container">
                  {/* CARD7 */}
                  <div className="solution-card">
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-07@3x.png")}
                      alt=""
                    ></img>
                    <div className="inner-solution-card">
                      <div className="solution-card-heading">DAT</div>
                      <div className="solution-card-sub-heading">
                        Digital Asset Track
                      </div>
                      <div className="solution-card-text">
                        AN OFFERING TO CREATE VARIOUS DIGITAL ASSETS LIKE BRAND/
                        CORPORATE FILMS, BANNERS FOR GOOGLE DISPLAY NETWORKS,
                        ETC.
                      </div>
                    </div>
                  </div>
                  {/* CARD8 */}
                  <div className="solution-card">
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-08@3x.png")}
                      alt=""
                    ></img>
                    <div className="inner-solution-card">
                      <div className="solution-card-heading">PAT</div>
                      <div className="solution-card-sub-heading">
                        Print Asset Track
                      </div>
                      <div className="solution-card-text">
                        THIS TRACK HELPS YOU DEVELOP PRINT ASSETS LIKE PRINT
                        ADS, PAMPHLETS/LEAFLETS, BROCHURES, CATALOGUES, OFFICE
                        BRANDING, ETC.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="solution-card-additonal-info">
                  Bigger offerings in these tracks can be: Brand visual
                  guidelines, Brand Identity guidelines, SOP catalogues, Brand
                  manuals.
                </div>
              </div>
              {/* card-CONTAINER5 */}
              <div className="solutions-container">
                <div className="solutions-heading">EVENTS & ACTIVATIONS</div>
                <div className="solution-card-container">
                  {/* CARD9 */}
                  <div className="solution-card-9">
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-09@3x.png")}
                      alt=""
                    ></img>
                    <div className="inner-solution-card">
                      <div className="solution-card-heading">EAT</div>
                      <div className="solution-card-sub-heading">
                        Events and Activations Track
                      </div>
                      <div className="solution-card-text">
                        THIS TRACK HELPS YOU WITH EVENT PLANNING, EXECUTION AND
                        PRODUCTION OF EVENT RELATED COLLATERALS.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Controller>
            <Scene
              duration={800}
              triggerHook={0}
              triggerElement={".solution-track-right-container"}
              pin
              pushFollowers="true"
            >
              <div className="solution-track-right-container">
                OUR SOLUTION TRACKS
              </div>
            </Scene>
          </Controller>
        </div>
      </div>
      <div className="SolutionTrack-alternative">
        <div className="inside-solution-track-container">
          <div className="solution-track-left-container">
            <div className="inside-solution-track-left-container">
              {/* card-CONTAINER1*/}
              <div className="solutions-container">
                <div className="solutions-heading">SOCIAL MEDIA MANAGEMENT</div>
                <div className="solution-card-container">
                  {/* CARD1 */}
                  <div className="solution-card">
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-01@3x.png")}
                      alt=""
                    ></img>
                    <div className="inner-solution-card">
                      <div className="solution-card-heading">SMART</div>
                      <div className="solution-card-sub-heading">
                        Social Media Audit & Restructuring Track
                      </div>
                      <div className="solution-card-text">
                        A ONE-TIME OFFERING TO HELP BUILD YOUR BRAND ONLINE &
                        MAINTAIN CONSISTENCY ACROSS YOUR SOCIAL MEDIA PLATFORM
                      </div>
                    </div>
                  </div>
                  {/* CARD2 */}
                  <div className="solution-card">
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-02@3x.png")}
                      alt=""
                    ></img>
                    <div className="inner-solution-card">
                      <div className="solution-card-heading">LIFT</div>
                      <div className="solution-card-sub-heading">
                        LinkedIn Intense Facelift Track
                      </div>
                      <div className="solution-card-text">
                        ONE-TIME OFFERING TO HELP YOU REMAIN UP-TO-DATE ON
                        LINKEDIN AND HELP ACHIEVE YOUR BUSINESS OBJECTIVES
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* card-CONTAINER2 */}
              <div className="solutions-container">
                <div className="solutions-heading">
                  MARKETING & COMMUNICATIONS
                </div>
                <div className="solution-card-container">
                  {/* CARD3 */}
                  <div className="solution-card">
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-03@3x.png")}
                      alt=""
                    ></img>
                    <div className="inner-solution-card">
                      <div className="solution-card-heading">CAT</div>
                      <div className="solution-card-sub-heading">
                        Communications Applications Track
                      </div>
                      <div className="solution-card-text">
                        AN OFFERING TO HELP YOU WITH CONTENT AND CAMPAIGN
                        PLANNING
                      </div>
                    </div>
                  </div>
                  {/* CARD4 */}
                  <div className="solution-card">
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-04@3x.png")}
                      alt=""
                    ></img>
                    <div className="inner-solution-card">
                      <div className="solution-card-heading">MAT</div>
                      <div className="solution-card-sub-heading">
                        LinkedIn Intense Facelift Track
                      </div>
                      <div className="solution-card-text">
                        CREATION AND APPLICATION OF BRAND ASSETS IN MULTIMEDIA
                        FORMATS LIKE ANIMATIONS, GIFS, SOUND, ETC.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* card-CONTAINER3 */}
              <div className="solutions-container">
                <div className="solutions-heading">WEBSITE DESIGN</div>
                <div className="solution-card-container">
                  {/* CARD5 */}
                  <div className="solution-card">
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-05@3x.png")}
                      alt=""
                    ></img>
                    <div className="inner-solution-card">
                      <div className="solution-card-heading">WANT</div>
                      <div className="solution-card-sub-heading">
                        Website Audit & Neating Track
                      </div>
                      <div className="solution-card-text">
                        A QUICK WEBSITE CLEAN-UP OFFERING USING EXISTING CONTENT
                        TO GIVE A FACELIFT TO THE CURRENT WEBSITE
                      </div>
                    </div>
                  </div>
                  {/* CARD6 */}
                  <div className="solution-card">
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-06@3x.png")}
                      alt=""
                    ></img>
                    <div className="inner-solution-card">
                      <div className="solution-card-heading">WARTrack</div>
                      <div className="solution-card-sub-heading">
                        Website Audit & Revamp Track
                      </div>
                      <div className="solution-card-text">
                        A TOTAL WEBSITE REVAMP IN TERMS OF LAYOUT, DESIGN,
                        CONTENT, AND DEVELOPMENT.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="solution-card-additonal-info">
                  Additional services we can offer: SEO, Maintenance.
                </div>
              </div>
              {/* card-CONTAINER4 */}
              <div className="solutions-container">
                <div className="solutions-heading">BRAND ASSETS</div>
                <div className="solution-card-container">
                  {/* CARD7 */}
                  <div className="solution-card">
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-07@3x.png")}
                      alt=""
                    ></img>
                    <div className="inner-solution-card">
                      <div className="solution-card-heading">DAT</div>
                      <div className="solution-card-sub-heading">
                        Digital Asset Track
                      </div>
                      <div className="solution-card-text">
                        AN OFFERING TO CREATE VARIOUS DIGITAL ASSETS LIKE BRAND/
                        CORPORATE FILMS, BANNERS FOR GOOGLE DISPLAY NETWORKS,
                        ETC.
                      </div>
                    </div>
                  </div>
                  {/* CARD8 */}
                  <div className="solution-card">
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-08@3x.png")}
                      alt=""
                    ></img>
                    <div className="inner-solution-card">
                      <div className="solution-card-heading">PAT</div>
                      <div className="solution-card-sub-heading">
                        Print Asset Track
                      </div>
                      <div className="solution-card-text">
                        THIS TRACK HELPS YOU DEVELOP PRINT ASSETS LIKE PRINT
                        ADS, PAMPHLETS/LEAFLETS, BROCHURES, CATALOGUES, OFFICE
                        BRANDING, ETC.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="solution-card-additonal-info">
                  Bigger offerings in these tracks can be: Brand visual
                  guidelines, Brand Identity guidelines, SOP catalogues, Brand
                  manuals.
                </div>
              </div>
              {/* card-CONTAINER5 */}
              <div className="solutions-container">
                <div className="solutions-heading">EVENTS & ACTIVATIONS</div>
                <div className="solution-card-container">
                  {/* CARD9 */}
                  <div className="solution-card-9">
                    <img
                      className="solution-card-mask"
                      src={require("../../images/solutions/sec02-block-09@3x.png")}
                      alt=""
                    ></img>
                    <div className="inner-solution-card">
                      <div className="solution-card-heading">EAT</div>
                      <div className="solution-card-sub-heading">
                        Events and Activations Track
                      </div>
                      <div className="solution-card-text">
                        THIS TRACK HELPS YOU WITH EVENT PLANNING, EXECUTION AND
                        PRODUCTION OF EVENT RELATED COLLATERALS.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="solution-track-right-container">
            OUR SOLUTION TRACKS
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionTrack;
