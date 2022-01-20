window.onload = () => {
  //Get corresponding dom elements
  //menu button
  const button = document.getElementById("menu_button");
  //naigation bar
  const nav = document.getElementById("nav_links");
  //the button icon
  const icon = document.getElementById("menu_icon");

  let toggle = false;

  const toggleMenu = () => {
    toggle = !toggle;

    if (toggle) {
      nav.classList.add("show-menu");
      icon.src = "./assets/close-line.svg";
    } else {
      nav.classList.remove("show-menu");
      icon.src = "./assets/menu.svg";
    }
  };

  button.onclick = () => {
    toggleMenu();
  };

  //menu buttons
  const homeButton = document.getElementById("Nav_home");
  const projectsButton = document.getElementById("Nav_projects");
  const aboutButton = document.getElementById("Nav_about");
  const contactButton = document.getElementById("Nav_contact");

  const scrollToSection = (section) => {
    const element = document.querySelector(section);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    toggleMenu();
  };

  homeButton.onclick = () => {
    scrollToSection("#Home");
  };
  projectsButton.onclick = () => {
    scrollToSection("#Projects");
  };
  aboutButton.onclick = () => {
    scrollToSection("#About");
  };
  contactButton.onclick = () => {
    scrollToSection("#Contact");
  };
};
