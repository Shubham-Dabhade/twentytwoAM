import React from "react";
import "./bottomcontainer.css";
import { useState } from "react";
import insightData from "../../../insights_data";
import { useEffect } from "react";

const BottomContainer = ({tag,totalPostsLen,indexOfFirstPost,indexOfLastPost}) => {

      const [insightPaginate, setInsightPaginate] = useState(
        insightData.slice(0, insightData.length - 1)
      );
    
    
      useEffect(()=>{
      if(tag!=='all'){
        const newInsightPaginate = [];
    
        insightPaginate?.forEach((data)=>{
          if(data.tags.includes(tag)){
            newInsightPaginate.push(data);
          }
        })
    
        setInsightPaginate(newInsightPaginate);
      }
      
    totalPostsLen(insightPaginate.length);

    },[tag,insightPaginate]);

    const currentPosts = insightPaginate.reverse().slice(indexOfFirstPost,indexOfLastPost);


  return (
    <div className="inside-insight-bottom-container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {currentPosts?.map((posts) => {
          return (
            <div className="col" key={posts.title}>
              <div className="card h-100">
                <img
                  src={require(`../../../images/${posts.image}`)}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{posts.title}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BottomContainer;
