import React from "react";
import ReactDOM from "react-dom/client";

const title = (
  <h1 className="head" tabIndex="5">
    {2 + 2 + 6}
    <br></br>
    Hello guys k cha hallichalli
  </h1>
);

const number = 500;
const HeadingComponent = () => (
  <div id="container">
    {console.log("oi mula")}
    <br></br>
    {2 + 2}
    {title}
    {number}
    <h1 className="heading">
      <br></br>
      {2 + 2 + 3} <br></br> Hello guys
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
