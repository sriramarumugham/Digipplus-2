import React from "react";
import "../styles/Home.css";
import {
  ActivitySession,
  Announcements,
  CurrentAcitvity,
} from "../components/index";
function Home() {
  return (
   
      <div className="homeWrapper">

        <div className="homePageActiviyWrapper">
          <ActivitySession />
          <ActivitySession />
          <ActivitySession />
        </div>

        <div className="AnnouncementSession">
          <Announcements />
          <CurrentAcitvity />
        </div>

      </div>
   
  );
}

export default Home;
