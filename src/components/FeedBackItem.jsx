import React from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import CancelIcon from "@mui/icons-material/Cancel";
function FeedbackItem({ item, handleDelete }) {
  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <CancelIcon color="orange" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
