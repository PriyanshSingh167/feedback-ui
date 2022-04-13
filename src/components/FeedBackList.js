import React from "react";
import FeedbackData from "../data/FeedBackData";
import FeedBack from "./FeedBack";

function FeedBackList() {
  if (!FeedbackData || FeedbackData.length === 0) {
    return <p>"No feedback yet. "</p>;
  }
  return (
    <div className="feedback-list">
      {FeedbackData.map((item) => (
        <FeedBack key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedBackList;
