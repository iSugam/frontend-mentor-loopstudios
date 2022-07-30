const hamburgerIcon = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburgerIcon.addEventListener("click", () => {
    navbar.classList.add("active");
});

const navCloseIcon = document.querySelector(".close-icon");

navCloseIcon.addEventListener("click", ()=> {
    navbar.classList.remove("active");
})