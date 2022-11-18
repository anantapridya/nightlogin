import logo from "./logo.svg";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import AboutUs from "./pages/aboutus";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommunitiesPage from "./pages/communitiesPage";
import JoinUs from "./pages/joinus";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/communities/:id" element={<CommunitiesPage />} />
            <Route path="/joinUs" element={<JoinUs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
