const ham = document.querySelector(".ham");
const nav = document.querySelector("nav");
ham.addEventListener("click", toggle);
nav.addEventListener("click", toggle);
function toggle() {
  ham.src = ham.src.includes("img/ham-close.svg")
    ? "img/ham-open.svg"
    : "img/ham-close.svg";
  nav.classList.toggle("show");
}
