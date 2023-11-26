import { Component, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
// import Lenis from "@studio-freight/lenis";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import { useState } from "react";
import ContactUs from "./pages/ContactUs/ContactUs";
import Insights from "./pages/Insights/Insights";
import Posts from "./pages/Posts/Posts";
import Loading from "./components/Loading/Loading";

function App() {
  //   useEffect(() => {
  //     const lenis = new Lenis()

  //     lenis.on('scroll', (e) => {
  //       console.log(e)
  //     })

  //     function raf(time) {
  //       lenis.raf(time)
  //       requestAnimationFrame(raf)
  //     }

  //     requestAnimationFrame(raf)
  // }, []);


  const [activeTag,setActiveTag] = useState();




  const sendActiveTag = (tag)=>{
    console.log(tag);
    setActiveTag(tag);
  }

  return (
    <Router>
    {}
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home  />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/insights" element={<Insights sendActiveTag={sendActiveTag} />} />
          <Route exact path="/insights/posts/:id" element={<Posts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
