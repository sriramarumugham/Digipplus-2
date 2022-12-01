import React from "react";
import "../styles/ActivityCardContainer.css";

// component display the heading and the paragrapsh and related links

function ActivityCard() {
  return (
    <div className="ActivityCardContainer">
      <div className="ActivityCardContent">
        <h3>Title</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.n
        </p>
      </div>
      <div className="ActionsContainer">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-eye"></i>
        <i class="fa-solid fa-code-branch"></i>
      </div>
    </div>
  );
}

export default ActivityCard;
