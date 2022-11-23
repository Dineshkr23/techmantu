import "./App.css";
import AboutUs from "./components/AboutUs";
import CentersOfExcellence from "./components/CentersOfExcellence";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Services from "./components/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/centersOfExcellence"
            element={<CentersOfExcellence />}
          />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
