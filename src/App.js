import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path="/twentytwoAM/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
