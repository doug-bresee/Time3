//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";

import ReactDOM from "react-dom";

var d = new Date(); // for now
var hours = d.getHours(); // => 9
d.getMinutes(); // =>  30
d.getSeconds(); // => 51

var timeOfDay;
//test
var colorStyle = {
  color: "green"
};

if (hours >= 0 && hours <= 12) {
  timeOfDay = "Morning";
  colorStyle.color = "red";
} else if (hours > 12 && hours <= 18) {
  timeOfDay = "Afternoon";
  colorStyle.color = "green";
} else {
  timeOfDay = "Evening";
  colorStyle.color = "blue";
}

// test comment

var elements = (
  <div>
    <h1 style={colorStyle} className="heading">
      Good {timeOfDay}
    </h1>
  </div>
);

ReactDOM.render(elements, document.getElementById("root"));
