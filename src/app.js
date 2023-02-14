const navMenuButtonElement =
  document.getElementsByClassName("nav-menu-button")[0];
const navLinkElement = document.getElementsByClassName("nav-link")[0];

navMenuButtonElement.addEventListener("click", () => {
  navLinkElement.classList.toggle("active");
});
