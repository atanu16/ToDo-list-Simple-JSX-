import React from "react";
import reactDom from "react-dom";

reactDom.render(
  <div>
    <h1>ToDo list</h1>
    <p> This weakend to do list </p>
    <h4>
      <ul>
        <li>React</li>
        <li>Unity</li>
        <li>C#</li>
      </ul>
    </h4>
    <p> Next Weak </p>
    <h4>
      <ul>
        <li>Flutter</li>
        <li>React Native </li>
      </ul>
    </h4>
  </div>,
  document.getElementById("root")
);
