// ===============================
// NAVBAR SCROLL OPTIMIZED
// ===============================

const navbar = document.querySelectorAll(".main-nav");
const text = document.querySelector(".only-nav");
const btn = document.querySelector(".contact-us-1");
const logo = document.querySelector(".logo");

window.addEventListener("scroll", () => {
  const isScrolled = window.scrollY > 80;

  navbar.forEach(nav => {
    nav.classList.toggle("scrolled", isScrolled);
  });

  if (text) text.classList.toggle("AB", isScrolled);
  if (btn) btn.classList.toggle("CD", isScrolled);
  if (logo) logo.classList.toggle("YZ", isScrolled);
});



const dot = document.querySelector(".cursor-dot");
const circle = document.querySelector(".cursor-circle");

let mouseX = 0;
let mouseY = 0;
let circleX = 0;
let circleY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  dot.style.left = mouseX + "px";
  dot.style.top = mouseY + "px";
});

function animate() {
  circleX += (mouseX - circleX) * 0.1;
  circleY += (mouseY - circleY) * 0.1;

  circle.style.left = circleX + "px";
  circle.style.top = circleY + "px";

  requestAnimationFrame(animate);
}

animate();