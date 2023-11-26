import React from "react";
import "./post.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import insightData from "../../insights_data";
import Nav from "../../components/Alternate_Navbar/Nav/Nav";
import Navbar from "../../components/Alternate_Navbar/Navbar/Navbar";
import Footer from "../../components/Alternate_Footer/Footer";
import Description from "../../components/Insights/Description/Description";
import Suggestion from "../../components/Insights/Suggestion/Suggestion";

const Posts = ({ activeTag }) => {
  const location = useLocation();
  const pathLoc = location.pathname.slice(0, 16);

  function subtract(value, mask) {
    return value
      .split("")
      .filter(function (a, i) {
        return a !== mask[i];
      })
      .join("");
  }
  const indexStr = parseInt(subtract(location.pathname, pathLoc));

  //page information
  const [postData, setPostData] = useState();
  const [postsTags, setPostsTags] = useState([]);

  useEffect(() => {
    insightData?.forEach((data) => {
      if (data.id === indexStr) {
        const post = data;
        const posTag = [];

        post?.tags.forEach((data) => {
          if (data === "projects") {
            posTag.push("Projects");
          }
          if (data === "unboringb2b") {
            posTag.push("Unboring B2B");
          }

          if (data === "b2b") {
            posTag.push("B2B");
          }

          if (data === "branding") {
            posTag.push("BRANDING");
          }

          if (data === "marketingstrategy") {
            posTag.push("Marketing Strategy");
          }

          if (data === "brandidentity") {
            posTag.push("Brand Identity");
          }

          if (data === "website") {
            posTag.push("Website");
          }

          if (data === "rebranding") {
            posTag.push("RE-BRANDING");
          }

          if (data === "corporatecommunication") {
            posTag.push("Corporate Communication");
          }

          if (data === "b2bcommunication") {
            posTag.push("B2B Communication");
          }
        });
        setPostData(post);
        setPostsTags(posTag);
      }
    });
  }, [indexStr]);

  return (
    <>
      <Navbar />
      <div className="Posts">
        <div className="insidePostsContainer">
          <div className="posts-tree-container">
            <a href="/insights">Insights</a> > <a>Posts</a> >{" "}
            <a
              href={`/insights/posts/${postData?.id}`}
            >{`${postData?.title}`}</a>
          </div>
          <div className="posts-title-container">{postData?.title}</div>
          <div className="posts-tags-container">
            {postsTags?.map((tag) => {
              return <div className="posts-tag" key={tag}>{tag}</div>;
            })}
          </div>
          <div className="posts-image-container">
            {postData?.image && <img src={require(`../../images/insights/${postData?.image}`)} alt="posts-image" className="posts-image" />}
          </div>
          <div className="posts-description-container">
            <Description descData = {postData?.content}/>
          </div>
          <div className="posts-suggestion-container">
            <Suggestion tags={postData?.tags}/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Posts;
