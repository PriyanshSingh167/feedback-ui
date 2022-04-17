import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { motion, AnimatePresence } from "framer-motion";
import FeedbackData from "../data/FeedBackData";
import FeedBack from "./FeedBack";
import FeedbackStats from "./FeedbackStats";
import FeedbackForm from "./FeedbackForm";
import AboutPage from "./pages/AboutPage";

function FeedBackList() {
  const [feedback, setfeedBack] = useState(FeedbackData);
  if (!feedback || feedback.length === 0) {
    return <p>"No feedback yet. "</p>;
  }
  const deleteItem = (id) => {
    if (window.confirm("Are you sure, you want to delete?")) {
      setfeedBack(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setfeedBack([newFeedback, ...feedback]);
  };

  return (
    <div className="container">
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStats feedback={feedback} />
      <div className="feedback-list">
        <AnimatePresence>
          {feedback.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedBack key={item.id} item={item} handleDelete={deleteItem} />
            </motion.div>
          ))}
        </AnimatePresence>
        <AboutPage />
      </div>
    </div>
  );
  // return (
  //   <div className="container">
  //     <FeedbackForm handleAdd={addFeedback} />
  //     <FeedbackStats feedback={feedback} />
  //     <div className="feedback-list">
  //       {feedback.map((item) => (
  //         <FeedBack key={item.id} item={item} handleDelete={deleteItem} />
  //       ))}
  //     </div>
  //   </div>
  // );
}

export default FeedBackList;
