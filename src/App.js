import React from "react";
import Header from "./components/Header";
import FeedBack from "./components/FeedBack";

const App = () => {
  return (
    <>
      <Header text="FeedBack UI" />
      <div className="container">
        <FeedBack />
      </div>
    </>
  );
};

export default App;
