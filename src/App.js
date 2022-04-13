import React from "react";
import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";

const App = () => {
  return (
    <>
      <Header text="FeedBack UI" />
      <div className="container">
        <FeedBackList />
      </div>
    </>
  );
};

export default App;
