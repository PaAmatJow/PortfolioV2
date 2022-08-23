const navClose = document.querySelector("#nav-close");
const navBtn = document.querySelector("#nav-btn");
const navBar = document.querySelector("#navbar");
const navLink = document.querySelectorAll("#nav-link");

navClose.addEventListener("click", function () {
	navBar.classList.remove("showNav");
});

navBtn.addEventListener("click", function () {
	navBar.classList.add("showNav");
});

navLink.addEventListener("click", function () {
	navBar.classList.remove("showNav");
});
