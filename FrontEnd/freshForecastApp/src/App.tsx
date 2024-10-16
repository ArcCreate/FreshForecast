import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScanProduce from "./pages/ScanPage";
import RecipePage from "./pages/RecipePage";
import Home from "./pages/HomePage";
import {Navigate} from "react-router-dom";
import './index.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="pt-16"> {/* Adjust padding top to match the height of the navbar */}
          <Routes>
            <Route path="/FreshForecast" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/scan" element={<ScanProduce />} />
            <Route path="/my-produce" element={<RecipePage />} />
            <Route path="*" element={<Navigate to="/" />} />{" "}
            {/* Redirect all other routes to home */}
          </Routes>
        </div>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
