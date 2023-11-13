import { useEffect } from "react";
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

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/twentytwoAM/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
