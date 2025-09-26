const images = ["./images/cat0.jpg", "./images/cat1.jpg", "./images/cat2.jpg"];
const body = document.getElementById("body");
const img = document.createElement("img");
img.src = images[Math.floor(Math.random() * images.length)];
img.width = 100;
body.appendChild(img);
