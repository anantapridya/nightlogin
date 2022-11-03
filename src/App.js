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

            <Route path="/nwdc" element={<Nwdc />} />
            <Route path="/nuxc" element={<Nwdc />} />
            <Route path="/nadc" element={<Nwdc />} />
            <Route path="/nddc" element={<Nwdc />} />
            <Route path="/nlnc" element={<Nwdc />} />
            <Route path="/ncpc" element={<Nwdc />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
