import React from "react";
import ReactDOM, { render } from "react-dom";
import Status from "./Status";

const App = () => {
  return (
    <div>
      <Status />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
