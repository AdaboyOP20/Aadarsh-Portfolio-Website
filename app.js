const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hLinks = document.querySelectorAll("#hLink");
const body = document.querySelector("body");
const moon = document.querySelector("#moon");
const pingpong = document.querySelector("#pingpong");
const mathquiz = document.querySelector("#mathquiz");
const digiclock = document.querySelector("#digiclock");
const colorpicker = document.querySelector("#colorpicker");
const hulk = document.querySelector("#hulk");
const stopwatch = document.querySelector("#stopwatch");


hamburger.addEventListener("click", ()=>{
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("bg-white");
});

hLinks.forEach(link=>{
  link.addEventListener("click", ()=>{
    menu.classList.toggle("hidden");
    hamburger.classList.toggle("bg-white");
  });
});

moon.addEventListener("click", ()=>{
  body.classList.toggle("dark");
});

pingpong.addEventListener("click", ()=>{
  location.href = "https://adaboyop20.github.io/pingpong-game/";
});

flappy.addEventListener("click", ()=>{
  location.href = "https://adaboyop20.github.io/flappy-bird/";
});

digiclock.addEventListener("click", ()=>{
  location.href = "https://adaboyop20.github.io/digi-clock/";
});

colorpicker.addEventListener("click", ()=>{
  location.href = "https://adaboyop20.github.io/color-picker/";
});

mathquiz.addEventListener("click", ()=>{
  location.href = "https://adaboyop20.github.io/math-quiz/";
});

hulk.addEventListener("click", ()=>{
  location.href = "https://adaboyop20.github.io/hulk/";
});

stopwatch.addEventListener("click", ()=>{
  location.href = "https://adaboyop20.github.io/stopwatch/";
});