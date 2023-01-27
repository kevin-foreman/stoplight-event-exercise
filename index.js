// (function () {
//   'use strict';
// Your code here
let stopButton = document.getElementById("stopButton");
let slowButton = document.getElementById("slowButton");
let goButton = document.getElementById("goButton");
let stopLight = document.getElementById("stopLight");
let slowLight = document.getElementById("slowLight");
let goLight = document.getElementById("goLight");

// Stop button
stopButton.addEventListener("click", (event) => {
  console.log(event.target.innerText + " was clicked");
  stopLight.classList.toggle("stop");
  if (stopLight.classList == "bulb") {
    console.log("Stop bulb off");
  } else {
    console.log("Stop bulb on");
  };
});

// Slow button
slowButton.addEventListener("click", (event) => {
  console.log(event.target.innerText + " was clicked");
  slowLight.classList.toggle("slow");
  if (slowLight.classList == "bulb") {
    console.log("Slow bulb off");
  } else {
    console.log("Slow bulb on");
  };
});

// Go button
goButton.addEventListener("click", (event) => {
  console.log(event.target.innerText + " was clicked");
  goLight.classList.toggle("go");
  if (goLight.classList == "bulb") {
    console.log("Go bulb off");
  } else {
    console.log("Go bulb on");
  };
});

///////////////////////////////////////

stopButton.addEventListener("mouseenter", (event) => {
  console.log("Entered stop button");
});

stopButton.addEventListener("mouseleave", (event) => {
  console.log("Left stop button");
});

slowButton.addEventListener("mouseenter", (event) => {
  console.log("Entered stop button");
});

slowButton.addEventListener("mouseleave", (event) => {
  console.log("Left stop button");
});

goButton.addEventListener("mouseenter", (event) => {
  console.log("Entered stop button");
});

goButton.addEventListener("mouseleave", (event) => {
  console.log("Left stop button");
});
// })();