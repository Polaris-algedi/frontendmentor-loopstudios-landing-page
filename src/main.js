import "./style.css";
/*________________------------- 1. The Menu Button -------------________________*/
const header = document.querySelector(".site-header");
const btn = document.querySelector(".site-header__menu");
const body = document.body;
const menuImg = btn.querySelector("img");

btn.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");

  // Update ARIA for accessibility
  btn.setAttribute("aria-expanded", isOpen);

  // Swap images - update these paths to match your actual folder structure!
  if (isOpen) {
    menuImg.src = "images/icon-close.svg"; // Check this path!
  } else {
    menuImg.src = "images/icon-hamburger.svg"; // Check this path!
  }
  body.classList.toggle("no-scroll");
});
/*______________________-------------------- 1 --------------------______________________*/
