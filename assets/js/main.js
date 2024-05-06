// target dom
const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.onload = function () {
  window.addEventListener("scroll", changeNavbarBG);
  window.addEventListener("scroll", activeNavLink);
};

function changeNavbarBG() {
  const scrollYPos = window.scrollY;
  // change navbar background color after scroll something
  if (scrollYPos > 200) {
    navbar.style.backgroundColor = `rgba(0,0,0, 0.8)`;
  } else {
    navbar.style.backgroundColor = `rgba(0,0,0, 0.3)`;
  }
}

function activeNavLink() {
  const top = window.scrollY;
  sections.forEach((sec) => {
    const offset = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (href === `#${id}`) {
          link.classList.add("active_nav_link");
        } else {
          link.classList.remove("active_nav_link");
        }
      });
    }
  });
}
