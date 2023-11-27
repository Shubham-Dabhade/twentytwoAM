import React from "react";
import "./Description.css";
import { useState } from "react";
import { useEffect } from "react";

const Description = ({ descData }) => {

    const [first,setFirst] = useState("");
    const [rest,setRest] = useState("");
    const [resData,setResData]= useState("");

    useEffect(()=>{
        const data = descData || [];
        const res = data[0]?.split(" ")[0];
        const firstL = res?.slice(0,1);
        const resL = res?.slice(1,res?.length);
        const resData = data[0]?.slice(res?.length+1, data[0]?.length);
        
        setFirst(firstL);
        setRest(resL);
        setResData(resData);

    },[descData])

  return (
    <>
      <div className="inside-description-container">
        {descData?.map((data, index) => {
          return (
            <div key={index}>
              {index === 0 ? (
                <div className="description" key={index}>
                  <b><i>{first}</i></b>{rest}{" "}{resData}
                </div>
              ) : (
                <div className="description" key={index}>
                  {data}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Description;
