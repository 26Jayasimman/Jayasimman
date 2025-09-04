import "../styles/DashBoard.css";
import Header from "./Header";
import UserProfile from "./UserProfile";
import SideBar from "./SideBar";
// import LoginPage from "./LoginPage";
import { useState } from "react";
import DashContents from "./dash-content";

function DashBoard() {
  const [active, setActive] = useState("dashboard");
  return (
    <>
      <div className="dashboard">
        <div className="sidebarcomponent">
          <SideBar setActive={setActive} active={active} />
        </div>

        <div className="main-component">
          <div className="header-component">
            <Header active={active} />
          </div>
          {active === "dashboard" && (
            <div className="dynamic-component">
              <DashContents />
            </div>
          )}
          {active === "profile" && (
            <div className="dynamic-component">
              <UserProfile />
            </div>
          )}
          {/* {active === "insights" && (
            <div className="dynamic-component">
              <LoginPage />
            </div>
          )} */}
        </div>
      </div>
    </>
  );
}
export default DashBoard;
