import { Component, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
// import Lenis from "@studio-freight/lenis";
import HashLoader from "react-spinners/HashLoader";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import { useState } from "react";

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

const [loading,setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },3000);
  },[]);

  return (
    <Router>
      <div className="App">

        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
