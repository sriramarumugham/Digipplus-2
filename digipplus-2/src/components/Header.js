import React from "react";
import "../styles/Header.css";
function Header() {
  return (
    <div className="HeaderSessionContainer">
      <div className="headerWrapper headerSession">
       
        <div className="searchSession">
        <div className="mobileView mobilemenu">
        <i class="fa-solid fa-bars"></i>
        </div>
          <i class="fa-solid fa-magnifying-glass"></i>
          <input />
        </div>

        <div className="userSessionheader">
          <i class="fa-solid fa-bell logo"></i>
          <i class="fa-solid fa-user logo"></i>
          <h4 className="userName">full user name</h4>
        </div>
      </div>

      <div className="homeHeadder">
        <div className="userSession">
          <i class="fa-regular fa-user"></i>
          <div>
            <p>Hi there, </p>
            <h3>User Full Name</h3>
          </div>
        </div>
        <div className="actionSession">
          <button className="actionButton">
            <strong>New</strong>
          </button>
          <button className="actionButton">
            <strong>Upload</strong>
          </button>
          <button className="actionButton">
            <strong>Share</strong>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
