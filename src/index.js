import React from "react";
import ReactDOM from "react-dom";

let name = "Joseph";
let currentDate = new Date();
let year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>copyright {year}</p>
  </div>,
  document.getElementById("root")
);
