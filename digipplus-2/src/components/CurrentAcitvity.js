import React from "react";
import "../styles/CurrentAcitvity.css";
import ActivityItem from "./ActivityItem";

function CurrentAcitvity() {
  return (
    <>
      <h2>Current Activity</h2>
      <div className="CurrentAcitvity">
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
      </div>
    </>
  );
}

export default CurrentAcitvity;
