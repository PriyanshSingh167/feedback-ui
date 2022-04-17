import React from "react";
import PropTypes from "prop-types";

function Card({ children, reverse }) {
  // const active = reverse ? "reverse" : "";
  // return <div className={`card ${active}`}>{children}</div>;

  // return <div className={`card ${reverse ? "reverse" : ""}`}>{children}</div>;

  // Using reverse by inline styling
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

Card.defaultProps = {
  reverse: false,
};

export default Card;
