import "../styles/MyAccountPage.css";

function MyAccountPage() {
    const savedTime = localStorage.getItem("registerTime");
    const userData=JSON.parse(localStorage.getItem("userData") || {})
    let formattedDate=""

if (savedTime) {
   formattedDate = new Date(savedTime).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true
  });

  console.log("Account Created:", formattedDate);
  // Account Created: January 15, 2025, 3:15 PM
}
  return (
    <>
      <div className="myaccountpage">
        <div className="acc-heading">
          <h1>My Account</h1>
        </div>

     <div className="table-parent">  <div className="acc-table"> <table >
            <tbody>
                    <tr><td><strong>First Name</strong></td><td>{userData.firstname} </td></tr>
                    <tr><td><strong>Last Name</strong></td><td>{userData.lastname}</td></tr>
                    <tr><td><strong>Email</strong></td><td>{userData.email}</td></tr>
                    <tr><td><strong>Phone Number</strong></td><td>{userData.phonenumber}</td></tr>
                    <tr><td><strong>Created At</strong></td><td>{formattedDate}</td></tr>

            </tbody>
        </table></div>
      </div></div>
    </>
  );
}
export default MyAccountPage;
