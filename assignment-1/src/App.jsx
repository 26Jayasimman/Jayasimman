import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import '@fortawesome/fontawesome-free/css/all.min.css';
import DashBoard from "./components/DashBoard";
import DashContents from "./components/dash-content";
import MyAccountPage from "./components/MyAccountPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/header" element={<Header />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/dash-content" element={<DashContents/>} />
          <Route path="/myaccount" element={<MyAccountPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
