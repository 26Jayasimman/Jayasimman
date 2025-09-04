import { Navigate, useNavigate } from "react-router-dom";
import "../styles/Header.css";

function Header({active}) {
  const navigate=useNavigate()

    const titles = {
    dashboard: "Dashboard ",
    profile: "User Profile",
    insights: "Insights",
    settings: "Settings",
  };

  const handleLogout=()=>{
    navigate('/')
    localStorage.clear()
  }
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="section-1">
            <i className="fa-solid fa-hand-holding-heart icon"></i>
          </div>
          <div className="section-2">
            <h3>{titles[active] || "Dashboard"}</h3>
          </div>
          <div className="section-3">
            <div className="myaccount">My Account</div>
            <button className="logout" onClick={handleLogout}>Logout</button>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Header;
