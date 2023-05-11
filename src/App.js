import "./Components/NavigationBar";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import FindATutor from "./Pages/FindATutor";
import Tabs from "./Components/Tabs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/findatutor" element={<FindATutor />} />

          <Route path="/form" element={<Tabs />} />
        </Routes>{" "}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
