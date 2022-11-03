import logo from "./logo.svg";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nwdc from "./pages/nwdc";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutUs" element={<Home />} />

            <Route path="/NWDC" element={<Nwdc />} />
            <Route path="/NUXC" element={<Nwdc />} />
            <Route path="/NADC" element={<Nwdc />} />
            <Route path="/NDDC" element={<Nwdc />} />
            <Route path="/NLNC" element={<Nwdc />} />
            <Route path="/NCPC" element={<Nwdc />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
