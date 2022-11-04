import logo from "./logo.svg";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nwdc from "./pages/nwdc";
import CommunitiesPage from "./pages/communitiesPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutUs" element={<Home />} />
            <Route path="/communities/:id" element={<CommunitiesPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
