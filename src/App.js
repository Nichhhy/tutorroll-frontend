import "./Components/NavigationBar";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import FindATutor from "./Pages/FindATutor";
import Tabs from "./Components/Tabs";
import AuthContextProvider from "./Contexts/AuthContext";
import Login from "./Pages/Login";
import TeacherProfile from "./Pages/TeacherProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />{" "}
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/findatutor" element={<FindATutor />} />

            <Route path="/joinastutor" element={<Tabs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/TeacherProfile" element={<TeacherProfile />} />
          </Routes>
        </AuthContextProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
