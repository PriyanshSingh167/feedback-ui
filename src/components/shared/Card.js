import React from "react";

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

export default Card;
