import React from "react";
import "../styles/Home.scss";

function Home() {
  return (
    <div className="homeWrapper page">
      <div className="homeHeadder">
        <div className="userSession">
          <i class="fa-regular fa-user"></i>
          <div>
            <p>Hi there, </p>
            <h3>User Full Name</h3>
          </div>
        </div>
        {/* action butoon component */}
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

export default Home;
