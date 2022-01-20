window.onload = () => {
  //Get corresponding dom elements
  //menu button
  const button = document.getElementById("menu_button");
  //naigation bar
  const nav = document.getElementById("nav_links");
  //the button icon
  const icon = document.getElementById("menu_icon");
  //body
  const body = document.getElementById("body");

  //Helper function to check if element is in viewport
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
    );
  }

  //Toggle for on
  let toggle = false;

  //Append a style to bring the nav bar into view
  const isMenuVisible = () => {
    toggle = !toggle;

    if (toggle) {
      nav.classList.add("show-menu");
      icon.src = "./assets/close-line.svg";
    } else {
      nav.classList.remove("show-menu");
      icon.src = "./assets/menu.svg";
    }
  };
  //Attatch this function to the corresponding DOM element
  button.onclick = () => {
    isMenuVisible();
  };

  //Navigation Menu
  const navButtons = document.getElementsByClassName("nav__link");
  //Having classes here seems to work best
  const sections = [".header", ".project", ".about", ".contact"];

  //Check if a given element is in view
  const checkSelected = () => {
    for (let i = 0; i < navButtons.length; i++) {
      if (isInViewport(document.querySelector(`${sections[i]}`))) {
        navButtons[i].classList.add("nav-selected");
      } else {
        navButtons[i].classList.remove("nav-selected");
      }
    }
  };
  //Call when page is loaded
  checkSelected();

  //Listen for scrolls to keep making the checks
  document.addEventListener(
    "scroll",
    () => {
      checkSelected();
    },
    { passive: false }
  );

  //Add some nice smooth scrolling
  for (let i = 0; i < navButtons.length; i++) {
    const element = document.querySelector(`#${navButtons[i].innerHTML}`);
    navButtons[i].onclick = () => {
      currentElement = navButtons[i].innerHTML;
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      isMenuVisible();
      setTimeout(() => checkSelected(), 300);
    };
  }
};
