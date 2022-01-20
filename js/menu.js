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

  //Navigation Menu
  const navButtons = document.getElementsByClassName("nav__link");

  let currentElement = "Home";

  const checkSelected = () => {
    for (let i = 0; i < navButtons.length; i++) {
      if (navButtons[i].innerHTML === currentElement) {
        navButtons[i].classList.add("nav-selected");
        console.log("added");
      } else {
        navButtons[i].classList.remove("nav-selected");
        console.log("removed");
      }
    }
  };

  checkSelected();

  for (let i = 0; i < navButtons.length; i++) {
    const element = document.querySelector(`#${navButtons[i].innerHTML}`);
    navButtons[i].onclick = () => {
      currentElement = navButtons[i].innerHTML;
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      toggleMenu();
      checkSelected();
    };
  }
};
