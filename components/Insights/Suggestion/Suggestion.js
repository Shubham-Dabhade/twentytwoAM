import React, { useEffect, useState } from 'react';
import "./suggestion.css";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import insightData from '../../../insights_data';


const Suggestion = ({tags}) => {
    const [randomTag,setRandomTag] = useState("");
    const [newData,setNewData]= useState();

    useEffect(()=>{
        const data = tags || [];
        const rand = data[0];
        setRandomTag(rand);
    },[tags]);

    useEffect(()=>{
        const newData = [];

        const threeData = [];
        insightData?.forEach((data)=>{
            if(data?.tags?.includes(randomTag)){
              newData.push(data);
            }
          })
          const reverseD = newData?.reverse();
          for (let i=0;i<3;i++){
            if(reverseD[i]){
                threeData.push(reverseD[i]);
            }
          }

        setNewData(threeData);
    },[randomTag]);

  return (
    <div className="inside-suggestion-container">
        <div className="suggestion-title">
            Suggested
        </div>
        <div className="suggestions-card-container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
              newData?.map((posts)=>{

              return(<div className="col" key={posts.title}>
                <div className="card h-100">
                  <img src={require(`../../../images/insights/${posts.image}`)} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{posts.title}</h5>
                    <a href={`/insights/posts/${posts.id}`} >

                    <button className="card-button">
                      Read More <ArrowOutwardIcon className="card-button-arrow"/>
                    </button>
                    </a>
                  </div>
                </div>
              </div>);
              })
            }
            </div>
        </div>
    </div>
  )
}

export default Suggestion;