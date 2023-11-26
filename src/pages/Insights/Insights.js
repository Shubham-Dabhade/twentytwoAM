import React, { useEffect, useRef, useState } from "react";
import "./insights.css";
import Navbar from "../../components/Alternate_Navbar/Navbar/Navbar";
import Footer from "../../components/Alternate_Footer/Footer";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import CallMadeIcon from "@mui/icons-material/CallMade";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import insightData from "../../insights_data";
import Pagination from "../../components/Insights/Pagination/Pagination";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import HashLoader from "react-spinners/HashLoader";

const Insights = ({sendActiveTag}) => {
  const innerTags = useRef();
  const [activeTag, setActiveTag] = useState("all");
  const [activeTagNum, setActiveTagNum] = useState(0);

  // handling the insight data
  const [insightDud, setInsightDud] = useState(insightData);
  const insightLength = insightDud.length;
  const [insightLatestEl, setInsightLatestEl] = useState(
    insightDud[insightDud.length - 1]
  );
  const [insightPaginate, setInsightPaginate] = useState(
    insightDud.slice(0, insightLength - 1)
  );

  const [currentPage,setCurrentPage]= useState(1);
  const [postsPerPage,setPostsPerPage] = useState(6);
  let [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);

  if(activeTag!=='all'){
    const newInsightPaginate = [];

    insightData.slice(0, insightLength - 1)?.forEach((data)=>{
      if(data?.tags?.includes(activeTag)){
        newInsightPaginate.push(data);
      }
    })

    setInsightPaginate(newInsightPaginate.reverse());
  }
  else{
    setInsightPaginate(insightData.slice(0, insightLength - 1).reverse());
  }

  setTimeout(()=>{
    setLoading(false);
  },2000);

},[activeTag]);


  //gettingcurrentposts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = insightPaginate.slice(indexOfFirstPost,indexOfLastPost);

  //pagenumber
  const pageNumbers = [];
  
  for (let i = 1;i<=Math.ceil(insightPaginate.length/postsPerPage);i++){
    pageNumbers.push(i);
  }


  //changepage
  const paginate = (pageNumber)=> setCurrentPage(pageNumber);
const tags = [
    "All",
    "Projects",
    "Unboring B2B",
    "B2B",
    "Branding",
    "Marketing Strategy",
    "Brand Identity",
    "Website",
    "Re-Branding",
    "Corporate Communication",
    "B2B Communication",
  ];

  const handleTags = (index) => {
    switch (index) {
      case 0:
        setActiveTag("all");
        setActiveTagNum(0);
        
        break;
      case 1:
        setActiveTag("projects");
        setActiveTagNum(1);
        break;
      case 2:
        setActiveTag("unboringb2b");
        setActiveTagNum(2);
        break;
      case 3:
        setActiveTag("b2b");
        setActiveTagNum(3);
        break;
      case 4:
        setActiveTag("branding");
        setActiveTagNum(4);
        break;
      case 5:
        setActiveTag("marketingstrategy");
        setActiveTagNum(5);
        break;
      case 6:
        setActiveTag("brandidentity");
        setActiveTagNum(6);
        break;
      case 7:
        setActiveTag("website");
        setActiveTagNum(7);
        break;
      case 8:
        setActiveTag("rebranding");
        setActiveTagNum(8);
        break;
      case 9:
        setActiveTag("corporatecommunication");
        setActiveTagNum(9);
        break;
      case 10:
        setActiveTag("b2bcommunication");
        setActiveTagNum(10);
        break;
      default:
        console.log("Looking forward to the Weekend");
    }
  };

  return (
    <>
      <Navbar />
      <div className="Insight">
        <div className="insight-title">Insights</div>
        <div className="insight-top-container">
          <div className="insight-top-container-title">
            <i>New Updates</i>{" "}
            <KeyboardDoubleArrowRightIcon className="new_update_arrow"
              style={{ height: "inherit", width: "2.5rem", marginLeft: "10px" }}
            />
          </div>
          <div className="insight-top-container-new-insight-container">
            <div className="insight-top-container-new-insight-title">
              {insightLatestEl.title}
              <CallMadeIcon className="new-insight-title-arrow" />
            </div>
            <div className="insight-top-container-new-insight-image-container">
              <img
                src={require(`../../images/insights/${insightLatestEl.image}`)}
                alt="new_update"
                className="insight-top-container-new-insight-image"
              />
            </div>
          </div>
        </div>
        <div className="insight-middle-container">
          <div className="inner-arrow left-arrow">
            {/* <ArrowBackIosIcon
              style={{ position: "absolute", left: "10px", cursor: "pointer" }}
            /> */}
          </div>
          <div className="inside-insight-middle-container" ref={innerTags}>
            {tags.map((tag, index) => {
              return (
                <div
                  className={`tags ${
                    activeTagNum === index ? "active-tag" : ""
                  }`}
                  key={index}
                  onClick={() => {
                    handleTags(index, activeTag);
                  }}
                >
                  {tag}
                </div>
              );
            })}
          </div>
          <div className="inner-arrow right-arrow">
            {/* <ArrowForwardIosIcon
              style={{ position: "absolute", right: "10px", cursor: "pointer" }}
            /> */}
          </div>
        </div>
        <div className="insight-bottom-container">
          <div className="inside-insight-bottom-container">
          {
            loading?<HashLoader color="#9036d6" />:
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
              currentPosts?.map((posts)=>{

              return(<div className="col" key={posts.title}>
                <div className="card h-100">
                  <img src={require(`../../images/insights/${posts.image}`)} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{posts.title}</h5>
                    <a href={`/insights/posts/${posts.id}`} >

                    <button className="card-button" onClick={()=>{sendActiveTag(activeTag)}}>
                      Read More <ArrowOutwardIcon className="card-button-arrow"/>
                    </button>
                    </a>
                  </div>
                </div>
              </div>);
              })
            }
            </div>
          }
          </div>
        </div>
        <div className="insights-pagination-container">
          <Pagination count={pageNumbers} paginate={paginate}/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Insights;
