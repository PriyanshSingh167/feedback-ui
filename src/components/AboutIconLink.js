import React from "react";
import HelpIcon from "@mui/icons-material/Help";
import { Link } from "react-router-dom";
function AboutIconLink() {
  return (
    <div className="about-link">
      <Link to="/about">
        {/* <Link
        to={{
          pathname: "/about",
          search: "?sort=name", //query parameters
          hash: "#hello",
        }}
      > */}
        <HelpIcon />
      </Link>
    </div>
  );
}

export default AboutIconLink;
