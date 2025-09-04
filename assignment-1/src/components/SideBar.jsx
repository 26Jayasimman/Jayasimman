import "../styles/SideBar.css";
import demoimage from "/demo-image.jpg";


function SideBar({setActive,active}) {
  return (
    <>
      <div className="sidebar-main">
        <div className="sidebar">
          <div className="logger-details">
            <div className="profile-img">
              <img className="profile" src={demoimage} alt="image not given" />
            </div>
            <div className="profile-name">
              <div className="user-name">Jayasimman</div>
              <div className="user-email">jaya1234@iytfyd.com</div>
            </div>
          </div>
          <hr className="line"/>

          <div className="sidebar-menu">
            <div className={`menu ${active==="dashboard"?"active":""}`} onClick={()=>setActive("dashboard")}>
              <h5 className="menu-names">
                <i class="fa-solid fa-house"></i>Dashboard
              </h5>
            </div>
            <div className={`menu ${active==="profile"?"active":""}`} onClick={()=>setActive("profile")}>
              <h5 className="menu-names">
                <i className="fa-solid fa-user"></i>Profile
              </h5>
            </div>
            {/* <div className={`menu ${active==="insights"?"active":""}`} onClick={()=>setActive("insights")}>
              <h5 className="menu-names">
                <i className="fa-solid fa-chart-line"></i>Insights
              </h5>
            </div>
            <div className={`menu ${active==="settings"?"active":""}`} onClick={()=>setActive("settings")}>
              <h5 className="menu-names">
                <i className="fa-solid fa-gear"></i>Settings
              </h5>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default SideBar;
