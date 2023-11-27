import React from "react";
import "./loading.css";

const Loading = ({ style }) => {
  return (
    <div className={style ? `loading` : "alt-loading"}>
      <div className="loading-company-logo">
        <img
          src={require("../../images/navbar/TTam Logo colour@3x.png")}
          alt=""
          className="loading-company-logo-image"
        />
      </div>
      <div className="scene">
        <div className="cube-wrapper">
          <div className="cube">
            <div className="cube-faces">
              <div className="cube-face shadow"></div>
              <div className="cube-face bottom"></div>
              <div className="cube-face top"></div>
              <div className="cube-face left"></div>
              <div className="cube-face right"></div>
              <div className="cube-face back"></div>
              <div className="cube-face front"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
