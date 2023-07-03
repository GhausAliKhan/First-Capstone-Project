const hamburger = document.querySelector(".hamburger");
const toolbar = document.querySelector(".toolbar");
const toolbarMenu = document.querySelector(".toolbar-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  toolbarMenu.classList.toggle("active");
  toolbar.classList.toggle("active");
});

document.querySelectorAll(".menu-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    toolbarMenu.classList.remove("active");
  })
);
