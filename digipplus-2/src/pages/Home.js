import React from "react";
import {
  ActivitySession,
  Announcements,
  CurrentAcitvity,
} from "../components/index";

import "../styles/Home.css";

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
