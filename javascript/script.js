document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("div[id]");
  const nav = document.querySelector("nav");
  const animation = nav.querySelector(".animation");

  function changeNavOnScroll() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove("active"));
    if (navLinks[index]) {
      navLinks[index].classList.add("active");
      updateAnimation(navLinks[index]);
    }
  }

  function handleNavClick(event) {
    event.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });

    navLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
    updateAnimation(this);
  }

  function updateAnimation(link) {
    const width = link.offsetWidth;
    const left = link.offsetLeft;
    animation.style.width = width + "px";
    animation.style.left = left + "px";
  }

  window.addEventListener("scroll", changeNavOnScroll);
  window.addEventListener("resize", changeNavOnScroll);

  navLinks.forEach((link) => {
    link.addEventListener("click", handleNavClick);
  });

  changeNavOnScroll();
});
